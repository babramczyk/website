/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { Icon } from "./Icon";

export const ExplorerFile = ({
  destRoute,
  filename,
  onSelect,
  isActive,
  iconSrc = "/icons/markdown.svg",
}) => {
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
          padding: ".125rem 1rem .125rem 2rem",
          background: isActive ? "#303334" : "initial",
          ":hover": {
            background: "#303334",
          },
        }}
        onClick={onSelect}
      >
        <Icon src={iconSrc} />
        <span>{filename}</span>
      </Link>
    </li>
  );
};
