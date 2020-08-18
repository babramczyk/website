/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Route, Switch, useLocation } from "react-router-dom";
import { Tab } from "./Tab";
import { lazy, Suspense } from "react";

const NorthwesternMutual = lazy(() =>
  import("!babel-loader!mdx-loader!../pages/NorthwesternMutual.md")
);
const ReadMe = lazy(() =>
  import("!babel-loader!mdx-loader!../pages/ReadMe.md")
);
const Toolkit = lazy(() =>
  import("!babel-loader!mdx-loader!../pages/Toolkit.md")
);

export const Editor = () => {
  const location = useLocation();
  const selectedFilename =
    location.pathname.split("/").slice(-1)[0] || "README.md";

  return (
    <main
      css={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        background: "white",
      }}
    >
      <div css={{ background: "#2a2a2b" }}>
        <Tab title={selectedFilename} />
      </div>
      <div css={{ overflow: "auto" }}>
        <div
          css={{
            padding: "2rem",
            maxWidth: "80ch",
          }}
        >
          <Suspense fallback>
            <Switch>
              <Route path="/NorthwesternMutual.md">
                <NorthwesternMutual />
              </Route>
              <Route path="/Toolkit.md">
                <Toolkit />
              </Route>
              <Route path="/">
                <ReadMe />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </main>
  );
};
