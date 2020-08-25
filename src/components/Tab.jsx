/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Icon } from "./Icon";

export const Tab = ({ title }) => {
  return (
    <div
      css={{
        background: "#1E1E1E",
        color: "#FFF",
        padding: ".5rem 2rem .5rem 1rem",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Icon
        src={title === "README.md" ? "/icons/info.svg" : "/icons/markdown.svg"}
      />
      <span>{title}</span>
    </div>
  );
};
