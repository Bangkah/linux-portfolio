import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: rgba(46, 52, 64, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(136, 192, 208, 0.2);
  margin-top: 24px;
  color: #d8dee9;

  h3 {
    margin-bottom: 16px;
    color: #88c0d0;
    font-size: 1.2rem;
  }
`;

export const GithubActivity: React.FC = () => {
  // Tema warna disesuaikan dengan tema Nord / Dark Terminal
  const explicitTheme = {
    light: ["#ebdbb2", "#97c1a9", "#559e83", "#1b6535", "#0a3c1b"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <CalendarWrapper>
      <h3>GitHub Contribution Activity</h3>
      <GitHubCalendar
        username="Bangkah"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme="dark"
        theme={explicitTheme}
      />
    </CalendarWrapper>
  );
};

export default GithubActivity;