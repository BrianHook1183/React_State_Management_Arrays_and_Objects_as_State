import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

// The App component should be the parent component of ClickTimes and TimestampsDisplay.

// The App.jsx file currently has a demo of how to use the TimestampsDisplay. You can delete this code.

// You can get the current timestamp with Date.now().

function App() {
  const timestamps = [1000000000000, 1000000001000];
  return <TimestampsDisplay timestamps={timestamps} />;
}

export default App;
