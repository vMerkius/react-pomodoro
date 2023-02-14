import { Time } from "./Time";
import React, { useState } from "react";

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [restTime, setRestTime] = useState(5);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = (event) => {
    event.preventDefault();
    setIsConfirmed(true);
  };
  return (
    <div>
      <div class="flex items-stretch">
        <form onSubmit={handleConfirm}>
          <label htmlFor="workt">Work time:</label>
          <input
            type="number"
            id="workt"
            name="workt"
            value={workTime}
            onChange={(event) => setWorkTime(event.target.value)}
          />
          <label htmlFor="restt">Rest time:</label>
          <input
            type="number"
            id="restt"
            name="restt"
            value={restTime}
            onChange={(event) => setRestTime(event.target.value)}
          />
          <button type="submit">Confirm</button>
        </form>
      </div>
      {isConfirmed && <Time work={workTime} rest={restTime} />}
    </div>
  );
}

export default App;
