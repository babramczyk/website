/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";
import { Explorer, FILENAMES } from "./components/Explorer";
import { Nav } from "./components/Nav";
import { Editor } from "./components/Editor";
import { createElement, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { useCurrentFilename } from "./hooks/useCurrentFilename";

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
        display: "flex",
        background: "rgb(33, 33, 33)",
        width: "100vw",
        height: "100vh",
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
  );
}

export default App;
