/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Explorer } from "./Explorer";
import { Nav } from "./Nav";
import { Editor } from "./Editor";
import { useEffect, useState } from "react";
import { TitleBar } from "./TitleBar";
import { useMediaQuery } from "@react-hook/media-query";
import { Helmet } from "react-helmet";

const pathnamesToFilenames = {
  "/": "README.md",
  "/10-factor/": "10Factor.md",
  "/akitabox/": "AkitaBox.md",
  "/ancilla-partners/": "AnicillaPartners.md",
  "/books/": "Books.md",
  "/northwestern-mutual/": "NorthwesternMutual.md",
  "/school/": "School.md",
  "/toolkit/": "Toolkit.md",
};

export default function Layout({ children, location, location: { state } }) {
  const currentFilename = pathnamesToFilenames[location.pathname];
  const { openDirs } = state || {};

  const [explorerVisible, setExplorerVisible] = useState(true);

  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (isMobile) {
      setExplorerVisible(false);
    }
  }, [isMobile]);

  return (
    <div
      css={{
        borderRadius: ".5rem",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        maxWidth: "1080px",
        margin: "0 auto",
      }}
    >
      <Helmet>
        <title>abramczyk.dev</title>
        <meta
          name="description"
          content="👋 I'm Brett Abramczyk. Come and learn more about me and what I do as a software engineer!"
        />
      </Helmet>
      <TitleBar filename={currentFilename} />
      <div
        css={{
          display: "flex",
          background: "#252526",
          flex: "1 0",
          minHeight: "0",
        }}
      >
        <Nav
          onNavItemClick={() => {
            setExplorerVisible((vis) => !vis);
          }}
          navItemActive={explorerVisible}
        />
        {explorerVisible && (
          <Explorer activeFile={currentFilename} initiallyOpenDirs={openDirs} />
        )}
        <Editor tabTitle={currentFilename}>{children}</Editor>
      </div>
    </div>
  );
}
