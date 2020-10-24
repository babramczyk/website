/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

export const PageHeader = ({
  title,
  secondary,
  positions,
  startDate,
  endDate,
  imgSrc,
  imgAlt,
  hideDivider,
  squareImg,
  children,
}) => {
  let dateRange;
  if (startDate || endDate) {
    const datesAreEqual = startDate === endDate;
    dateRange = datesAreEqual ? startDate : `${startDate} – ${endDate}`;
  }

  let positionsDisplay;
  if (positions && positions.length) {
    positionsDisplay = (
      <span>
        {positions.map((position, index) => (
          <Fragment key={position}>
            <strong>{position}</strong>
            {index !== positions.length - 1 ? " → " : null}
          </Fragment>
        ))}
      </span>
    );
  }

  return (
    <Fragment>
      <header
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          css={{
            display: "flex",
            alignItems: "center",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
            padding: ".5rem 0",
          }}
        >
          {imgSrc && (
            <div
              css={{
                height: "6rem",
                width: "6rem",
                marginRight: "1rem",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <img
                src={require(`../assets${imgSrc}`)}
                css={{
                  objectFit: "cover",
                  ...(!squareImg && {
                    borderRadius: "200%",
                  }),
                }}
                alt={imgAlt || ""}
              />
            </div>
          )}
          {title}
        </h1>
        <div
          css={{
            textAlign: "center",
          }}
        >
          {secondary && (
            <p>
              <strong>{secondary}</strong>
            </p>
          )}
          {positionsDisplay}
          {dateRange && (
            <p>
              <em>{dateRange}</em>
            </p>
          )}
        </div>
        {children}
      </header>

      <br />
      {!hideDivider && <hr />}
    </Fragment>
  );
};
