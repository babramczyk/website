/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { InfoIcon } from "./InfoIcon";

export const ExplorerFile = ({ destRoute, filename }) => {
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
          padding: '.125rem 1rem .125rem 2rem',
          ":hover": {
            background: "#303334",
          },
        }}
      >
        <InfoIcon />
        <span>{filename}</span>
      </Link>
    </li>
  );
};
