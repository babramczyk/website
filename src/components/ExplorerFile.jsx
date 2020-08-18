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
          color: "#d2d2d2",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingLeft: "2rem",
          paddingRight: "1rem",
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
