import React, { useEffect, useRef } from "react";
import { useCountsContext } from "../hooks/useCounts";

const Session = () => {
  const [counts] = useCountsContext();

  let countdown = 0;
  let interval;

  useEffect(() => {}, [countdown]);

  const timer = () => {
    if (countdown === counts.workCount) return;
    countdown++;
    document.getElementById("counter").innerHTML = counts.workCount - countdown;
  };

  const start = () => (interval = setInterval(timer, 1000));

  const pause = () => clearInterval(interval);

  const resetTimer = () => {
    pause();
    countdown = 0;
    document.getElementById("counter").innerHTML = counts.workCount - countdown;
  };

  return (
    <div>
      <h4>Session</h4>
      <h2 id="counter">{counts.workCount - countdown}</h2>
      <div className="button-container">
        <button onClick={start}>
          <i class="fas fa-play"></i>
        </button>
        <button onClick={pause}>
          <i class="fas fa-pause"></i>
        </button>
        <button onClick={resetTimer}>
          <i class="fas fa-spinner"></i>
        </button>
      </div>
    </div>
  );
};

export default Session;
