/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Icon = ({ src, emoji, className }) => {
  if (!src && !emoji) {
    throw new Error("Icon: src or emoji prop required");
  }

  const img = src ? (
    <img
      css={{
        objectFit: "cover",
      }}
      className={className}
      src={require(`../assets${src}`)}
      alt=""
    />
  ) : (
    emoji
  );

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
      {img}
    </div>
  );
};
