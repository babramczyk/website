/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Icon = ({ src }) => {
  return (
    <img
      css={{ width: "1rem", height: "1rem", marginRight: ".5rem" }}
      src={src}
      alt=""
      width="16"
      height="16"
    />
  );
};
