/** @jsx jsx */
import { jsx } from "@emotion/core";
import FilesIcon from "../assets/icons/files.svg";
import LinkedInIcon from "../assets/icons/linked-in.svg";
import GithubIcon from "../assets/icons/github.svg";
import FileIcon from "../assets/icons/file.svg";

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
      <button
        css={{
          ...navItemStyles,
          ...(navItemActive && activeNavItemStyles),
        }}
        title="File explorer"
        onClick={onNavItemClick}
      >
        <img src={FilesIcon} alt="Explorer" />
      </button>
      <a
        css={{ ...navItemStyles }}
        href="//linkedin.com/in/brett-abramczyk"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <img src={LinkedInIcon} alt="LinkedIn" />
      </a>
      <a
        css={{ ...navItemStyles }}
        href="//github.com/babramczyk"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <img src={GithubIcon} alt="GitHub" />
      </a>
      <a
        css={{ ...navItemStyles }}
        href="/brett-abramczyk.pdf"
        target="_blank"
        title="Resume"
      >
        <img
          src={FileIcon}
          alt="Resume"
          css={{ width: "24px", height: "24px" }}
        />
      </a>
    </div>
  );
};
