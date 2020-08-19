/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

const chevronStyles = {
  top: "2px",
  position: "relative",
};

export const ExplorerDirectory = ({ children, dirname }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={{ paddingLeft: ".75rem" }}>
      <div
        role="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        css={{ width: "100%", cursor: "pointer" }}
      >
        <span css={{ marginRight: "4px" }}>
          <img
            src="/icons/chevron-right.svg"
            alt=""
            css={{
              ...chevronStyles,
              display: isOpen ? "none" : "inline-block",
            }}
          />
          <img
            src="/icons/chevron-down.svg"
            alt=""
            css={{
              ...chevronStyles,
              display: isOpen ? "inline-block" : "none",
            }}
          />
        </span>
        <span css={{ marginRight: ".5rem" }}>
          <img
            src="/icons/folder.svg"
            alt=""
            css={{
              ...chevronStyles,
              display: isOpen ? "none" : "inline-block",
            }}
          />
          <img
            src="/icons/folder-opened.svg"
            alt=""
            css={{
              ...chevronStyles,
              display: isOpen ? "inline-block" : "none",
            }}
          />
        </span>
        <span>{dirname}</span>
      </div>
      {isOpen ? children : null}
    </div>
  );
};
