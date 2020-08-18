/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

export const ExplorerFile = ({ destRoute, filename }) => {
  return (
    <li css={{  }}>
      <Link
        to={destRoute}
        css={{
          color: "rgb(210, 210, 210)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingLeft: "2rem",
          paddingRight: '1rem'
        }}
      >
        <img
          src="/icons/info.svg"
          alt=""
          width="16"
          height="16"
          css={{ marginRight: ".5rem" }}
        />
        <span>{filename}</span>
      </Link>
    </li>
  );
};
