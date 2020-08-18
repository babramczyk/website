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
        <ExplorerFile destRoute="/file1.md" filename="file1.md">
          file1.md
        </ExplorerFile>
        <ExplorerFile destRoute="/file2.md" filename="file2.md">
          file2.md
        </ExplorerFile>
      </ul>
    </div>
  );
};
