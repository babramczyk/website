/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Children, cloneElement, Fragment } from "react";
import { mouseFocusSelector } from "../utils/mouseFocusSelector";
import { Icon } from "./Icon";

const chevronStyles = {
  top: "2px",
  position: "relative",
};

export const ExplorerDirectory = ({ children, dirname, onClick, isOpen }) => {
  return (
    <Fragment>
      <button
        onClick={() => onClick(!isOpen)}
        css={{
          width: "100%",
          cursor: "pointer",
          paddingLeft: ".75rem",
          ":hover": {
            background: "#303334",
          },
          [mouseFocusSelector]: {
            outline: "none",
          },
        }}
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
      </button>
      {isOpen
        ? // Map over children (should be Explorer* components), and indent them
          // This is a way keep the components themselves responsible for highlighting while still being the full width of the explorer. Plus, we get to keep composition this way 🤗
          Children.map(children, (child) => {
            return cloneElement(child, { indentLevel: 1 });
          })
        : null}
    </Fragment>
  );
};
