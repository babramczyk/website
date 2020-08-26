/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Tab } from "./Tab";

export const Editor = ({ children, tabTitle }) => {
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
      <div css={{ background: "#252526" }}>
        <Tab title={tabTitle} />
      </div>
      <div css={{ overflow: "auto" }}>
        <div
          css={{
            padding: "2rem",
            maxWidth: "80ch",
            userSelect: "initial",
          }}
        >
          {children}
        </div>
      </div>
    </main>
  );
};
