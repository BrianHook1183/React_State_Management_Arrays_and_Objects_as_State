import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

// The App component should be the parent component of ClickTimes and TimestampsDisplay.

// You can get the current timestamp with Date.now().

function App() {
  const [timestamps, setStamps] = useState([]);

  const handleClick = (stamp) => {
    setStamps([...timestamps, stamp]);
  };

  return (
    <div>
      <ClickTimes handleClick={handleClick} />
      <TimestampsDisplay timestamps={timestamps} />
    </div>
  );
}

export default App;
