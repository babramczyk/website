/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { ExplorerDirectory } from "./ExplorerDirectory";
import { ExplorerFile } from "./ExplorerFile";

export const Explorer = ({ activeFile, initiallyOpenDirs = ["Timeline"] }) => {
  const [openDirs, setOpenDirs] = useState(initiallyOpenDirs);

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
          isActive={activeFile === "README.md"}
          iconSrc="/icons/info.svg"
          openDirs={openDirs}
        />
        <ExplorerDirectory
          dirname="Timeline"
          isOpen={isDirOpen("Timeline")}
          onClick={(isOpen) => {
            if (isOpen) {
              setOpenDirs((openDirs) => openDirs.concat(["Timeline"]));
            } else {
              setOpenDirs((openDirs) =>
                openDirs.filter((dir) => dir !== "Timeline")
              );
            }
          }}
        >
          <ExplorerFile
            destRoute="/school/"
            filename="School.md"
            isActive={activeFile === "School.md"}
            iconSrc="/uw-madison.png"
            openDirs={openDirs}
          />
          <ExplorerFile
            destRoute="/ancilla-partners/"
            filename="AncillaPartners.md"
            isActive={activeFile === "AncillaPartners.md"}
            iconSrc="/ancilla-partners__inverted-transparent.png"
            openDirs={openDirs}
          />
          <ExplorerFile
            destRoute="/akitabox/"
            filename="AkitaBox.md"
            isActive={activeFile === "AkitaBox.md"}
            iconSrc="/akitabox.png"
            openDirs={openDirs}
          />
          <ExplorerFile
            destRoute="/northwestern-mutual/"
            filename="NorthwesternMutual.md"
            isActive={activeFile === "NorthwesternMutual.md"}
            iconSrc="/nm.png"
            openDirs={openDirs}
          />
        </ExplorerDirectory>
        <ExplorerFile
          destRoute="/10-factor/"
          filename="10Factor.md"
          isActive={activeFile === "10Factor.md"}
          openDirs={openDirs}
        />
        <ExplorerFile
          destRoute="/toolkit/"
          filename="Toolkit.md"
          isActive={activeFile === "Toolkit.md"}
          openDirs={openDirs}
        />
        <ExplorerFile
          destRoute="/skills/"
          filename="Skills.md"
          isActive={activeFile === "Skills.md"}
          openDirs={openDirs}
        />
      </ul>
    </div>
  );

  function isDirOpen(dirname) {
    return openDirs.includes(dirname);
  }
};
