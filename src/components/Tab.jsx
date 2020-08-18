/** @jsx jsx */
import { jsx } from "@emotion/core";
import { InfoIcon } from "./InfoIcon";

export const Tab = ({ title }) => {
  return (
    <div
      css={{
        background: "#212121",
        color: "#FFF",
        padding: ".5rem 2rem .5rem 1rem",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <InfoIcon />
      <span>{title}</span>
    </div>
  );
};
