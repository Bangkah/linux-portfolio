import { onRequestGet as __api_github_ts_onRequestGet } from "C:\\Users\\atha\\Documents\\github\\Linux-Portfolio\\functions\\api\\github.ts"

export const routes = [
    {
      routePath: "/api/github",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_github_ts_onRequestGet],
    },
  ]