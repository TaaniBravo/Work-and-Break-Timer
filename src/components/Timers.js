import { useCountContext, useCountsContext } from "../hooks/useCounts";

const Timers = () => {
  const [counts, setCounts] = useCountsContext();

  return (
    <div id="set-timer-container">
      <div>
        <h4 id="break-label">Break Length</h4>
        <div className="crement-container">
          <button
            onClick={() =>
              setCounts({ ...counts, breakCount: counts.breakCount - 1 })
            }
          >
            <i class="fas fa-arrow-down"></i>
          </button>{" "}
          {counts.breakCount}{" "}
          <button
            onClick={() =>
              setCounts({ ...counts, breakCount: counts.breakCount + 1 })
            }
          >
            <i class="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
      <div>
        <h4>Break Length</h4>
        <div className="crement-container">
          <button
            onClick={() =>
              setCounts({ ...counts, workCount: counts.workCount - 1 })
            }
          >
            <i class="fas fa-arrow-down"></i>
          </button>{" "}
          {counts.workCount}{" "}
          <button
            onClick={() =>
              setCounts({ ...counts, workCount: counts.workCount + 1 })
            }
          >
            <i class="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timers;
