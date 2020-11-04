/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Explorer } from "./Explorer";
import { Nav } from "./Nav";
import { Editor } from "./Editor";
import { Fragment, useEffect, useState } from "react";
import { TitleBar } from "./TitleBar";
import { useMediaQuery } from "@react-hook/media-query";
import { Helmet } from "react-helmet";
import { useRainbow } from "../hooks/useRainbow";

const pathnamesToFilenames = {
  "/": "README.md",
  "/10-factor/": "10Factor.md",
  "/akitabox/": "AkitaBox.md",
  "/ancilla-partners/": "AncillaPartners.md",
  "/books/": "Books.md",
  "/northwestern-mutual/": "NorthwesternMutual.md",
  "/school/": "School.md",
  "/skills/": "Skills.md",
  "/toolkit/": "Toolkit.md",
};

export default function Layout({ children, location }) {
  const currentFilename = pathnamesToFilenames[location.pathname] || "404.md";

  const isClient = typeof window !== "undefined";

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [explorerVisible, setExplorerVisible] = useState(isClient && !isMobile);

  useEffect(() => {
    setExplorerVisible(!isMobile);
  }, [isMobile, setExplorerVisible]);

  const colors = useRainbow();
  const colorKeys = Object.keys(colors);

  return (
    <div
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${500}ms linear,
          ${colorKeys[1]} ${500}ms linear,
          ${colorKeys[2]} ${500}ms linear,
          ${colorKeys[3]} ${500}ms linear
        `,
        // background: "rgb(79, 26, 165)",
        background: `radial-gradient(
          circle at 0 0,
          var(${colorKeys[0]}) 0%,
          var(${colorKeys[1]}) 20%,
          var(${colorKeys[2]}) 50%,
          var(${colorKeys[3]}) 70%
        )`,

        // TODO: Put this as an absolutely styled ::before, OR just changed the colors so we don't have to mess with opacity
        padding: "2rem 0.5rem",
      }}
    >
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
          boxShadow:
            "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Helmet>
          <title>
            Brett Abramczyk
            {currentFilename && currentFilename !== "README.md"
              ? ` | ${currentFilename}`
              : ""}
          </title>
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
          {/* Because of rehydration issues, there's some components that don't really make sense to render statically. For example, we don't know what `openDirs` will be until the browser evaluates `window.history`, we don't know if the user is on a mobile device or not until the browser loads the page, etc.
          
              So... The strategy here is to render everything we can that we know won't change or cause flickering statically, and hide the rest until the browser/React takes over rendering*/}
          {isClient && (
            <Fragment>
              <Nav
                onNavItemClick={() => {
                  setExplorerVisible((vis) => !vis);
                }}
                navItemActive={explorerVisible}
              />
              {explorerVisible && <Explorer activeFile={currentFilename} />}
              <Editor tabTitle={currentFilename}>{children}</Editor>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
