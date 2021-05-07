import React, { useEffect } from "react";
import { useCountsContext } from "../hooks/useCounts";

const Session = () => {
  const [counts] = useCountsContext();

  let countdown;

  useEffect(() => {
    countdown = counts.workCount;
  }, []);

  const timer = () => {
    if (countdown <= 0) return;
    countdown--;
  };

  const counter = () => setInterval(timer, 1000);

  return (
    <div>
      <h4>Session</h4>
      <h2>{countdown}</h2>
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
