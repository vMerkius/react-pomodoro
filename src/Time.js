import React, { useState, useEffect, useRef } from "react";

function Time({ work }) {
  const [time, setTime] = useState(work * 60);
  const audioRef = useRef(null);

  useEffect(() => {
    setTime(work * 60);
  }, [work]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          audioRef.current.play(); // uruchomienie dźwięku alarmu
          return work * 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [work]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h1 className="text-3xl">
        <div className="flex items-center">
          <div className="">Time:</div>
          <div className="ml-2">
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </div>
        </div>
      </h1>
      <audio ref={audioRef}>
        <source src="/alarm.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export { Time };
