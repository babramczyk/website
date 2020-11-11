/** @jsx jsx */
import { jsx } from "@emotion/core";

const circleStyles = {
  borderRadius: "50%",
  width: "12px",
  height: "12px",
  margin: "0 4px",
  cursor: "auto",
};

export function TitleBar({ filename }) {
  return (
    <div
      css={{
        background: "#3C3C3C",
        color: "#CCC",
        display: "flex",
        position: "relative",
        height: "22px",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
      }}
    >
      <div
        css={{
          position: "absolute",
          left: "0",
          display: "flex",
          paddingLeft: "2px",
        }}
      >
        <button
          css={{ ...circleStyles, background: "#FC4848" }}
          onClick={() => {
            document.querySelector("body").innerHTML = "Are you happy?";
            document.querySelector("body").style =
              "display: flex; align-items: center; justify-content: center";
          }}
        ></button>
        <span css={{ ...circleStyles, background: "#FEB225" }}></span>
        <span css={{ ...circleStyles, background: "#2ACA33" }}></span>
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
