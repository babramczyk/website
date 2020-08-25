/** @jsx jsx */
import { jsx } from "@emotion/core";

const circleStyles = {
  borderRadius: "50%",
  width: "12px",
  height: "12px",
  margin: "0 4px",
};

export function TitleBar({ filename }) {
  return (
    <div
      css={{
        background: "#333",
        color: "#CCC",
        display: "flex",
        position: "relative",
        height: "22px",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
      }}
    >
      <div css={{ position: "absolute", left: "0", display: "flex", paddingLeft: '2px' }}>
        <span css={{ ...circleStyles, background: "red" }}></span>
        <span css={{ ...circleStyles, background: "yellow" }}></span>
        <span css={{ ...circleStyles, background: "green" }}></span>
      </div>

      <span
        css={{
          fontSize: ".75rem",
        }}
      >
        {filename} – abramczyk.dev
      </span>
    </div>
  );
}
