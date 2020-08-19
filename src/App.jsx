/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";
import { Explorer } from "./components/Explorer";
import { Nav } from "./components/Nav";
import { Editor } from "./components/Editor";
import { createElement, lazy, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

const ReadMe = lazy(() => import("!babel-loader!mdx-loader!./pages/ReadMe.md"));

const FILENAMES = ["NorthwesternMutual.md", "Toolkit.md"];
const fileComponents = FILENAMES.reduce((dest, filename) => {
  return {
    ...dest,
    [filename]: lazy(() =>
      import(`!babel-loader!mdx-loader!./pages/${filename}`)
    ),
  };
}, {});

function App() {
  const location = useLocation();
  const selectedFilename =
    location.pathname.split("/").slice(-1)[0] || "README.md";

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
      <Editor tabTitle={selectedFilename}>
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
