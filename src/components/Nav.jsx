/** @jsx jsx */
import { jsx } from "@emotion/core";

const navItemStyles = { cursor: "pointer", paddingBottom: "2rem" };

export const Nav = () => {
  return (
    <div
      css={{
        background: "rgb(58, 58, 58)",
        flex: "0 0 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <img
        src="/icons/files.svg"
        alt="File explorer"
        role="button"
        css={{ ...navItemStyles }}
        title="File explorer"
      />
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
