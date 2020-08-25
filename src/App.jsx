/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Explorer, FILENAMES } from "./components/Explorer";
import { Nav } from "./components/Nav";
import { Editor } from "./components/Editor";
import { createElement, Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { useCurrentFilename } from "./hooks/useCurrentFilename";
import { TitleBar } from "./components/TitleBar";

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

  return (
    <div
      css={{
        borderRadius: ".5rem",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        maxWidth: '1440px',
        margin: '0 auto'
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
        <Nav />
        <Explorer />
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
