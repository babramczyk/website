/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";

export const PageHeader = ({
  title,
  secondary,
  positions,
  startDate,
  endDate,
  imageSrc,
  children
}) => {
  let dateRange;
  if (startDate || endDate) {
    const datesAreEqual = startDate === endDate;
    dateRange = datesAreEqual ? startDate : `${startDate} – ${endDate}`;
  }

  let positionsDisplay;
  if (positions && positions.length) {
    positionsDisplay = positions.map((position, index) => (
      <span>
        <strong>{position}</strong>
        {index !== positions.length - 1 ? " | " : null}
      </span>
    ));
  }

  return (
    <Fragment>
      <h1>{title}</h1>
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
      {children}
      <br />
      <hr />
    </Fragment>
  );
};
