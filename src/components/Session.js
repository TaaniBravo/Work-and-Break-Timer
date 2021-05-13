import React from "react";
import { useCountsContext } from "../hooks/useCounts";

const Session = () => {
  const [counts, setCounts] = useCountsContext();

  let countdown = 0;
  let interval;

  const timer = () => {
    if (countdown === counts.workCount) return;
    countdown++;
    document.getElementById("time-left").innerHTML = formatTimer(
      counts.workCount - countdown
    );
  };

  const start = () => (interval = setInterval(timer, 1000));

  const pause = () => clearInterval(interval);

  const resetTimer = () => {
    pause();
    countdown = 0;
    document.getElementById("time-left").innerHTML = formatTimer(
      counts.workCount - countdown
    );
    setCounts({
      workCount: 1500,
      breakCount: 300
    });
  };

  const formatTimer = seconds => {
    let sec = seconds % 60;
    const min = parseInt(seconds / 60);

    if (sec.toString().length === 1) sec = "0" + sec;

    return min + ":" + sec;
  };

  return (
    <div>
      <h4 id="timer-label">Session</h4>
      <h2 id="time-left">{formatTimer(counts.workCount - countdown)}</h2>
      <div className="button-container">
        <button onClick={start} id="start_stop">
          <i class="fas fa-play"></i>
        </button>
        <button onClick={pause}>
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
