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
            maxWidth: "65ch",
            userSelect: "text",
            margin: "0 auto",
          }}
        >
          {children}
        </div>
      </div>
    </main>
  );
};
