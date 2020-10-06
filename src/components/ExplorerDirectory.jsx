/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { Icon } from "./Icon";

const chevronStyles = {
  top: "2px",
  position: "relative",
};

export const ExplorerDirectory = ({ children, dirname }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div css={{ paddingLeft: ".75rem" }}>
      <div
        role="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        css={{ width: "100%", cursor: "pointer" }}
      >
        <Icon
          src={isOpen ? "/icons/chevron-down.svg" : "/icons/chevron-right.svg"}
          css={{ ...chevronStyles, marginRight: "4px" }}
        />
        <Icon
          src={isOpen ? "/icons/folder-opened.svg" : "/icons/folder.svg"}
          css={chevronStyles}
        />
        <span>{dirname}</span>
      </div>
      {isOpen ? children : null}
    </div>
  );
};
