import React from "react";
import { useCountsContext } from "../hooks/useCounts";

const Session = () => {
  const [counts, setCounts] = useCountsContext();

  let countdown = 0;
  let interval;

  console.log(interval);

  const sessionTimer = () => {
    if (counts.workCount === countdown) {
      clearInterval(interval);
      countdown = 0;
      interval = setInterval(breakTimer, 1000);
    }

    console.log();

    countdown++;
    document.getElementById("time-left").innerHTML = formatTimer(
      counts.workCount - countdown
    );
  };

  const breakTimer = () => {
    if (counts.breakCount === countdown) {
      clearInterval(interval);
      interval = null;
      resetTimer();
    }

    countdown++;
    document.getElementById("time-left").innerHTML = formatTimer(
      counts.breakCount - countdown
    );
  };

  const start = () => {
    interval = setInterval(
      counts.workCount !== 0 ? sessionTimer : breakTimer,
      1000
    );
    console.log(interval);
  };

  const pause = () => {
    clearInterval(interval);
    interval = null;
    countdown -= 3;
  };

  const resetTimer = () => {
    clearInterval(interval);
    interval = null;

    countdown = 0;

    setCounts({
      workCount: 1500,
      breakCount: 300
    });

    document.getElementById("time-left").innerHTML = formatTimer(
      counts.workCount - countdown
    );
  };

  const formatTimer = seconds => {
    let sec = seconds % 60;
    let min = parseInt(seconds / 60);

    if (min.toString().length === 1) min = "0" + min;
    if (sec.toString().length === 1) sec = "0" + sec;

    return min + ":" + sec;
  };

  const handleStartStop = () => {
    !interval ? start() : pause();
  };

  return (
    <div>
      <h4 id="timer-label">Session</h4>
      <h2 id="time-left">{formatTimer(counts.workCount - countdown)}</h2>
      <div className="button-container">
        <button onClick={handleStartStop} id="start_stop">
          <i class="fas fa-play"></i>
          <i class="fas fa-pause"></i>
        </button>
        <button onClick={resetTimer} id="reset">
          <i class="fas fa-spinner"></i>
        </button>
      </div>
    </div>
  );
};

export default Session;
