/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { Icon } from "./Icon";

export const ExplorerFile = ({ page, indentLevel = 0 }) => {
  const { path, filename, iconSrc, iconEmoji } = page;
  if (!iconSrc && !iconEmoji) {
    iconSrc = "/icons/markdown.svg";
  }

  const paddingLeft = 2 + indentLevel * 0.75;

  return (
    <li>
      <Link
        to={path}
        css={{
          color: "#CCC",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: `.125rem 1rem .125rem ${paddingLeft}rem`,
          ":hover": {
            background: "#303334",
          },
        }}
        activeStyle={{
          background: "#303334",
        }}
      >
        <Icon src={iconSrc} emoji={iconEmoji} />
        <span>{filename}</span>
      </Link>
    </li>
  );
};
