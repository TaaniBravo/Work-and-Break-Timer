import React from "react";
import { useCountsContext } from "../hooks/useCounts";

const Session = () => {
  const [counts, setCounts] = useCountsContext();
  const { workCount, breakCount, onBreak, displayTime } = counts;

  let countdown = 0;
  let interval;

  const sessionTimer = () => {
    if (workCount === countdown) {
      clearInterval(interval);
      interval = null;

      setCounts({ ...counts, onBreak: true });

      countdown = 0;

      document.getElementById("timer-label").innerHTML = "Break Time!";
      document.getElementById("time-left").innerHTML = formatTimer(breakCount);
      setTimeout(() => {
        interval = setInterval(breakTimer, 1000);
      }, 1000);
    } else {
      countdown++;
      document.getElementById("time-left").innerHTML = formatTimer(
        workCount - countdown
      );
    }
  };

  const breakTimer = () => {
    if (breakCount === countdown) {
      clearInterval(interval);
      interval = null;
      resetTimer();
    } else {
      countdown++;
      document.getElementById("time-left").innerHTML = formatTimer(
        breakCount - countdown
      );
    }
  };

  const start = () => {
    if (!interval) {
      !onBreak
        ? (interval = setInterval(sessionTimer, 1000))
        : (interval = setInterval(breakTimer, 1000));
    }
  };

  const pause = () => {
    clearInterval(interval);
    interval = null;
    countdown -= 4;
  };

  const resetTimer = () => {
    clearInterval(interval);
    interval = null;

    countdown = 0;

    setCounts({
      workCount: 1500,
      breakCount: 300,
      onBreak: false
    });

    document.getElementById("timer-label").innerHTML = "Session";

    document.getElementById("time-left").innerHTML = formatTimer(
      workCount - countdown
    );
  };

  const formatTimer = seconds => {
    let min = parseInt(seconds / 60);
    let sec = seconds % 60;

    if (min.toString().length === 1) min = "0" + min;
    if (sec.toString().length === 1) sec = "0" + sec;

    console.log(min + ":" + sec);

    return min + ":" + sec;
  };

  const handleStartStop = () => {
    console.log(interval);
    !interval ? start() : pause();
    console.log(interval);
  };

  return (
    <div>
      <h4 id="timer-label">Session</h4>
      <h2 id="time-left">{formatTimer(workCount - countdown)}</h2>
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
