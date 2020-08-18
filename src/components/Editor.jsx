/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Route, Switch, useLocation } from "react-router-dom";
import { Tab } from "./Tab";
import { lazy, Suspense } from "react";

const File1 = lazy(() => import("!babel-loader!mdx-loader!../pages/File1.md"));
const File2 = lazy(() => import("!babel-loader!mdx-loader!../pages/File2.md"));
const ReadMe = lazy(() =>
  import("!babel-loader!mdx-loader!../pages/ReadMe.md")
);

export const Editor = () => {
  const location = useLocation();
  const selectedFilename =
    location.pathname.split("/").slice(-1)[0] || "README.md";

  return (
    <main
      css={{
        flex: "1 1 100ch",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div css={{ background: "#2a2a2b" }}>
        <Tab title={selectedFilename} />
      </div>
      <div
        css={{
          padding: "4rem",
          background: "white",
          flex: "1",
          overflow: "auto",
        }}
      >
        <Suspense fallback>
          <Switch>
            <Route path="/file1.md">
              <File1 />
            </Route>
            <Route path="/file2.md">
              <File2 />
            </Route>
            <Route path="/">
              <ReadMe />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </main>
  );
};
