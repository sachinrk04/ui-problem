import React, { useEffect, useState } from "react";
import "./Stopwatch.scss";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => {
          return time + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const handleStart = () => {
    setTime(0);
    setIsActive(true);
  };

  const handlePauseResume = () => {
    setIsActive(!isActive);
  };

  const handleStop = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>

      <p>{formatTime(time)}</p>

      <button onClick={isActive ? handleStop : handleStart}>
        {isActive ? "Stop" : "Start"}
      </button>
      <button onClick={handlePauseResume}>
        {isActive ? "Pause" : "Resume"}
      </button>
    </div>
  );
}
