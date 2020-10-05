/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Explorer, FILENAMES } from "./components/Explorer";
import { Nav } from "./components/Nav";
import { Editor } from "./components/Editor";
import { createElement, lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useCurrentFilename } from "./hooks/useCurrentFilename";
import { TitleBar } from "./components/TitleBar";
import { useMediaQuery } from "@react-hook/media-query";

const ReadMe = lazy(() => import("!babel-loader!mdx-loader!./pages/ReadMe.md"));

const fileComponents = FILENAMES.reduce((dest, filename) => {
  return {
    ...dest,
    [filename]: lazy(() =>
      import(`!babel-loader!mdx-loader!./pages/${filename}`)
    ),
  };
}, {});

function App() {
  const currentFilename = useCurrentFilename();
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
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
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
          <Explorer
            onFileSelect={() => {
              if (isMobile) {
                setExplorerVisible(false);
              }
            }}
          />
        )}
        <Editor tabTitle={currentFilename}>
          <Suspense fallback>
            <Switch>
              {FILENAMES.map((filename) => (
                <Route path={`/${filename}`} key={filename}>
                  {createElement(fileComponents[filename])}
                </Route>
              ))}
              <Route path="/">
                <ReadMe />
              </Route>
            </Switch>
          </Suspense>
        </Editor>
      </div>
    </div>
  );
}

export default App;
