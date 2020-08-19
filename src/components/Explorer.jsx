/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ExplorerDirectory } from "./ExplorerDirectory";
import { ExplorerFile } from "./ExplorerFile";

export const Explorer = () => {
  return (
    <div
      css={{
        background: "rgb(42, 42, 43)",
        color: "rgb(210, 210, 210)",
        flex: "0 1 16rem",
        minWidth: "fit-content",
        padding: "1rem 0",
        fontSize: "14px",
        userSelect: "none",
      }}
    >
      <header
        css={{
          textTransform: "uppercase",
          paddingLeft: "1rem",
          marginBottom: ".5rem",
          color: "#BBB",
        }}
      >
        Explorer
      </header>
      <div
        css={{
          textTransform: "uppercase",
          fontWeight: "bold",
          paddingLeft: "1rem",
          marginBottom: ".5rem",
          color: "#CCC",
        }}
      >
        abramczyk.dev
      </div>
      <ul
        className="file-list"
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <ExplorerFile destRoute="/" filename="README.md" />
        <ExplorerFile destRoute="/Toolkit.md" filename="Toolkit.md" />
        <ExplorerDirectory dirname="experience">
          <ExplorerFile
            destRoute="/NorthwesternMutual.md"
            filename="NorthwesternMutual.md"
          />
        </ExplorerDirectory>
      </ul>
    </div>
  );
};