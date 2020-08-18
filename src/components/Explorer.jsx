/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

const linkStyles = { color: "rgb(210, 210, 210)", textDecoration: "none" };

export const Explorer = () => {
  return (
    <div
      css={{
        background: "rgb(42, 42, 43)",
        color: "rgb(210, 210, 210)",
        flex: "0 1 16rem",
        padding: "1rem 2rem",
      }}
    >
      <ul className="file-list">
        <li className="file">
          <Link to="/" css={linkStyles}>
            README.md
          </Link>
        </li>
        <li className="file">
          <Link to="/file1.md" css={linkStyles}>
            file1.md
          </Link>
        </li>
        <li className="file">
          <Link to="/file2.md" css={linkStyles}>
            file2.md
          </Link>
        </li>
      </ul>
    </div>
  );
};
