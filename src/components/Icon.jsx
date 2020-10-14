/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Icon = ({ src, className }) => {
  return (
    <div
      css={{
        width: "1rem",
        height: "1rem",
        marginRight: ".5rem",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        css={{
          objectFit: "cover",
        }}
        className={className}
        src={require(`../assets${src}`)}
        alt=""
      />
    </div>
  );
};
