/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Icon = ({ src, className }) => {
  return (
    <img
      css={{
        width: "1rem",
        height: "1rem",
        marginRight: ".5rem",
        display: "inline-block",
      }}
      className={className}
      src={src}
      alt=""
      width="16"
      height="16"
    />
  );
};
