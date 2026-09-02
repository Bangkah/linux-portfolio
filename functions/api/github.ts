interface PagesFunctionContext {
  request: Request;
  env: { GITHUB_TOKEN?: string };
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
    },
  });

const githubRequest = async (
  token: string,
  path: string,
  init: RequestInit = {}
) => {
  const response = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...init.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
};

const graphqlRequest = async (
  token: string,
  query: string,
  variables: Record<string, unknown> = {}
) => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL API error: ${response.status}`);
  }

  const result = (await response.json()) as {
    data?: {
      user?: { pinnedItems?: { nodes?: unknown[] } };
      repository?: { issues?: { nodes?: unknown[] } };
    };
    errors?: { message: string }[];
  };

  if (result.errors?.length) {
    throw new Error(`GraphQL error: ${result.errors[0].message}`);
  }

  return result.data;
};

export const onRequestGet = async ({ request, env }: PagesFunctionContext) => {
  const token = env.GITHUB_TOKEN;

  if (!token) {
    return json({ error: "GITHUB_TOKEN is not configured" }, 503);
  }

  const url = new URL(request.url);
  const path = url.searchParams.get("path");
  const username = url.searchParams.get("username");

  try {
    if (path === "user" && username) {
      return json(await githubRequest(token, `/users/${encodeURIComponent(username)}`));
    }

    if (path === "pinned-repos" && username) {
      const data = await graphqlRequest(
        token,
        `query($username: String!) {
          user(login: $username) {
            pinnedItems(first: 6) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  stargazers_count: stargazerCount
                  forks_count: forkCount
                }
              }
            }
          }
        }`,
        { username }
      );

      return json(data?.user?.pinnedItems?.nodes || []);
    }

    if (path === "top-closed-issues") {
      const data = await graphqlRequest(
        token,
        `query {
          repository(owner: "Bangkah", name: "Linux-Portfolio") {
            issues(first: 5, states: CLOSED, orderBy: {field: UPDATED_AT, direction: DESC}) {
              nodes {
                number
                title
                url
                createdAt
                closedAt
                comments { totalCount }
              }
            }
          }
        }`
      );

      return json(data?.repository?.issues?.nodes || []);
    }

    return json({ error: "Invalid path parameter" }, 400);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return json({ error: message }, 502);
  }
};
