/** @jsx jsx */
import { jsx } from "@emotion/core";
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
      }}
    >
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
        <ExplorerFile
          destRoute="/NorthwesternMutual.md"
          filename="NorthwesternMutual.md"
        >
          file1.md
        </ExplorerFile>
      </ul>
    </div>
  );
};
