import React from "react";

function ClickTimes({ handleClick }) {
  return <button onClick={() => handleClick(Date.now())}>Button Press</button>;
}

export default ClickTimes;
