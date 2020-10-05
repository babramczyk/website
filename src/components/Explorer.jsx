/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ExplorerDirectory } from "./ExplorerDirectory";
import { ExplorerFile } from "./ExplorerFile";

export const Explorer = ({ onFileSelect }) => {
  return (
    <div
      css={{
        background: "#252526",
        color: "#D2D2D2",
        flex: "0 1 16rem",
        minWidth: "fit-content",
        padding: "1rem 0",
        fontSize: "14px",
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
        <ExplorerFile
          destRoute="/"
          filename="README.md"
          onSelect={onFileSelect}
        />
        <ExplorerDirectory dirname="Timeline">
          <ExplorerFile
            destRoute="/School.md"
            filename="School.md"
            onSelect={onFileSelect}
          />
          <ExplorerFile
            destRoute="/AncillaPartners.md"
            filename="AncillaPartners.md"
            onSelect={onFileSelect}
          />
          <ExplorerFile
            destRoute="/AkitaBox.md"
            filename="AkitaBox.md"
            onSelect={onFileSelect}
          />
          <ExplorerFile
            destRoute="/NorthwesternMutual.md"
            filename="NorthwesternMutual.md"
            onSelect={onFileSelect}
          />
        </ExplorerDirectory>
        <ExplorerFile
          destRoute="/10Factor.md"
          filename="10Factor.md"
          onSelect={onFileSelect}
        />
        <ExplorerFile
          destRoute="/Toolkit.md"
          filename="Toolkit.md"
          onSelect={onFileSelect}
        />
        <ExplorerFile
          destRoute="/Skills.md"
          filename="Skills.md"
          onSelect={onFileSelect}
        />
      </ul>
    </div>
  );
};

export const FILENAMES = [
  "NorthwesternMutual.md",
  "Toolkit.md",
  "AkitaBox.md",
  "AncillaPartners.md",
  "School.md",
  "Skills.md",
  "10Factor.md",
];
