import React from 'react';
import "./CountdownTimer.scss";
import CountDownViewer from "../../Components/CountdownTimerComponents/CountDownViewer"


export default function CountdownTimer() {
  // const DAYS_IN_MS = 1 * 1 * 1 * 1 * 1000;
  const DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeDays = NOW_IN_MS + DAYS_IN_MS;

  return (
    <div className='count-down-timer'>
      <h1>Countdown Timer</h1>
      <CountDownViewer targetDate={dateTimeDays} />
    </div>
  )
}
