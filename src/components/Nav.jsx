/** @jsx jsx */
import { jsx } from "@emotion/core";

const navItemStyles = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "3.5rem",
  ":hover": {
    filter: "brightness(100)",
  },
};

export const Nav = () => {
  return (
    <div
      css={{
        background: "rgb(58, 58, 58)",
        flex: "0 0 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        // border: "1px solid red",
      }}
    >
      <div
        css={{
          ...navItemStyles,
          borderLeft: "1px solid #DDDDDD",
        }}
        role="button"
        title="File explorer"
      >
        <img src="/icons/files.svg" alt="Explorer" />
      </div>
      <a
        css={{ ...navItemStyles }}
        href="//linkedin.com/in/brett-abramczyk"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn page"
      >
        <img src="/icons/linked-in.svg" alt="LinkedIn" />
      </a>
      <a
        css={{ ...navItemStyles }}
        href="//github.com/babramczyk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/github.svg" alt="GitHub" />
      </a>
    </div>
  );
};
