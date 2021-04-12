import React from "react";

// You do not need to edit TimestampsDisplay.

function TimestampsDisplay(props) {
  const { timestamps } = props;
  return (
    <ol>
      {timestamps.map((ts, i) => (
        <li key={i}>{new Date(ts).toLocaleString()}</li>
      ))}
    </ol>
  );
}

export default TimestampsDisplay;
