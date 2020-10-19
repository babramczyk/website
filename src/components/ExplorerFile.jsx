/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { Icon } from "./Icon";

export const ExplorerFile = ({
  destRoute,
  filename,
  iconSrc = "/icons/markdown.svg",
  indentLevel = 0,
}) => {
  const paddingLeft = 2 + indentLevel * 0.75;

  return (
    <li>
      <Link
        to={destRoute}
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
        <Icon src={iconSrc} />
        <span>{filename}</span>
      </Link>
    </li>
  );
};
