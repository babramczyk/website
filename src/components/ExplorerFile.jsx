/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { Icon } from "./Icon";

export const ExplorerFile = ({
  destRoute,
  filename,
  iconSrc = "/icons/markdown.svg",
  indentLevel = 0,
  openDirs,
}) => {
  return (
    <li css={{ paddingLeft: `${indentLevel * 0.75}rem` }}>
      <Link
        to={destRoute}
        css={{
          color: "#CCC",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: ".125rem 1rem .125rem 2rem",
          ":hover": {
            background: "#303334",
          },
        }}
        activeStyle={{
          background: "#303334",
        }}
        state={{ openDirs }}
      >
        <Icon src={iconSrc} />
        <span>{filename}</span>
      </Link>
    </li>
  );
};
