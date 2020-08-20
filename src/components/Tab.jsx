/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Icon } from "./Icon";

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
      <Icon
        src={title === "README.md" ? "/icons/info.svg" : "/icons/markdown.svg"}
      />
      <span>{title}</span>
    </div>
  );
};
