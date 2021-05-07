import React, { useEffect, useRef } from "react";
import { useCountsContext } from "../hooks/useCounts";

const Session = () => {
  const [counts] = useCountsContext();

  let countdown = 0;

  useEffect(() => {}, [countdown]);

  const timer = () => {
    if (countdown === counts.workCount) return;
    countdown++;
    document.getElementById("counter").innerHTML = counts.workCount - countdown;
  };

  const counter = () => setInterval(timer, 1000);

  return (
    <div>
      <h4>Session</h4>
      <h2 id="counter">{counts.workCount - countdown}</h2>
      <div className="button-container">
        <button onClick={counter}>
          <i class="fas fa-play"></i>
        </button>
        <button>
          <i class="fas fa-pause"></i>
        </button>
        <button>
          <i class="fas fa-spinner"></i>
        </button>
      </div>
    </div>
  );
};

export default Session;
