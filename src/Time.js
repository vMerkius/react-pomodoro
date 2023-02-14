import React, { useState, useEffect, useRef } from "react";

function Time({ work = 25, rest = 5 }) {
  const [time, setTime] = useState(work * 60);
  const [isWorking, setIsWorking] = useState(true); // flaga, czy aktualnie trwa czas pracy
  const prevIsWorkingRef = useRef(isWorking);

  useEffect(() => {
    prevIsWorkingRef.current = isWorking;
  }, [isWorking]);

  useEffect(() => {
    setTime(isWorking ? work * 60 : rest * 60);
  }, [isWorking, work, rest]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          setIsWorking((prevIsWorking) => {
            prevIsWorkingRef.current = prevIsWorking;
            return !prevIsWorking;
          });
          return prevIsWorkingRef.current ? rest * 60 : work * 60;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [work, rest]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {isWorking ? "Work" : "Rest"} time left: {minutes}:
        {seconds < 10 ? "0" : ""}
        {seconds}
      </h1>
    </div>
  );
}

export { Time };
