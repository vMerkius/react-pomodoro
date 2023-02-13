import { Time } from "./Time";
import React, { useState } from "react";

function App() {
  const [workTime, setWorkTime] = useState("");
  const [restTime, setRestTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Work time: ${workTime}`);
    console.log(`Rest time: ${restTime}`);
  };

  const handleWorkTimeChange = (event) => {
    setWorkTime(event.target.value);
  };

  const handleRestTimeChange = (event) => {
    setRestTime(event.target.value);
  };
  return (
    <div>
      <div class="flex items-stretch">
        <form onSubmit={handleSubmit}>
          <label for="workt">Work time:</label>
          <input
            type="number"
            id="workt"
            name="workt"
            onChange={handleWorkTimeChange}
          />
          <label for="restt">Rest time:</label>
          <input
            type="number"
            id="restt"
            name="restt"
            onChange={handleRestTimeChange}
          />
          <button type="submit">Confirm</button>
        </form>
      </div>
      <Time></Time>
    </div>
  );
}

export default App;
