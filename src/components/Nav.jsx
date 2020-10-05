/** @jsx jsx */
import { jsx } from "@emotion/core";

const navItemStyles = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "3.5rem",
  filter: "brightness(.7)",
  ":hover": {
    filter: "brightness(1)",
  },
};

const activeNavItemStyles = {
  borderLeft: "2px solid #FFF",
  filter: "brightness(1)",
};

export const Nav = ({ onNavItemClick, navItemActive }) => {
  return (
    <div
      css={{
        background: "rgb(58, 58, 58)",
        flex: "0 0 3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div
        css={{
          ...navItemStyles,
          ...(navItemActive && activeNavItemStyles),
        }}
        role="button"
        title="File explorer"
        onClick={onNavItemClick}
      >
        <img src="/icons/files.svg" alt="Explorer" />
      </div>
      <a
        css={{ ...navItemStyles }}
        href="//linkedin.com/in/brett-abramczyk"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <img src="/icons/linked-in.svg" alt="LinkedIn" />
      </a>
      <a
        css={{ ...navItemStyles }}
        href="//github.com/babramczyk"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <img src="/icons/github.svg" alt="GitHub" />
      </a>
      <a
        css={{ ...navItemStyles }}
        href="/assets/brett-abramczyk.pdf"
        target="_blank"
        title="Resume"
      >
        <img
          src="/icons/file.svg"
          alt="Resume"
          css={{ width: "24px", height: "24px" }}
        />
      </a>
    </div>
  );
};
