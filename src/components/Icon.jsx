/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Icon = ({ src }) => {
  return (
    <img
      src={src}
      alt=""
      width="16"
      height="16"
      css={{ marginRight: ".5rem" }}
    />
  );
};
