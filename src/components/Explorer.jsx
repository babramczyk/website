/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ExplorerDirectory } from "./ExplorerDirectory";
import { ExplorerFile } from "./ExplorerFile";

export const Explorer = ({ onFileSelect, activeFile }) => {
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
          isActive={activeFile === "README.md"}
          iconSrc="/icons/info.svg"
        />
        <ExplorerDirectory dirname="Timeline">
          <ExplorerFile
            destRoute="/School"
            filename="School.md"
            onSelect={onFileSelect}
            isActive={activeFile === "School.md"}
            iconSrc="/uw-madison.png"
          />
          <ExplorerFile
            destRoute="/AncillaPartners"
            filename="AncillaPartners.md"
            onSelect={onFileSelect}
            isActive={activeFile === "AncillaPartners.md"}
          />
          <ExplorerFile
            destRoute="/AkitaBox"
            filename="AkitaBox.md"
            onSelect={onFileSelect}
            isActive={activeFile === "AkitaBox.md"}
          />
          <ExplorerFile
            destRoute="/NorthwesternMutual"
            filename="NorthwesternMutual.md"
            onSelect={onFileSelect}
            isActive={activeFile === "NorthwesternMutual.md"}
          />
        </ExplorerDirectory>
        <ExplorerFile
          destRoute="/10Factor"
          filename="10Factor.md"
          onSelect={onFileSelect}
          isActive={activeFile === "10Factor.md"}
        />
        <ExplorerFile
          destRoute="/Toolkit"
          filename="Toolkit.md"
          onSelect={onFileSelect}
          isActive={activeFile === "Toolkit.md"}
        />
        <ExplorerFile
          destRoute="/Skills"
          filename="Skills.md"
          onSelect={onFileSelect}
          isActive={activeFile === "Skills.md"}
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
