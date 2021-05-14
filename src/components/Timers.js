import { useCountsContext } from "../hooks/useCounts";
import Button from "./Button";

// () => setCounts({ ...counts, breakCount: counts.breakCount - 1 })

const Timers = () => {
  const [counts, setCounts] = useCountsContext();
  const { breakCount, workCount } = counts;

  return (
    <div id="set-timer-container">
      <div>
        <h4 id="break-label">Break Length</h4>
        <div className="crement-container">
          <Button
            id={"break-decrement"}
            Arrow={"down"}
            disabled={breakCount === 60}
            onClickFunction={() => {
              if (breakCount === 60) return;
              setCounts({
                ...counts,
                breakCount: breakCount - 60
              });
            }}
          />{" "}
          <div id="break-length">{breakCount / 60}</div>{" "}
          <Button
            id={"break-increment"}
            disabled={breakCount === 3600}
            Arrow={"up"}
            onClickFunction={() => {
              if (breakCount === 3600) return;
              setCounts({
                ...counts,
                breakCount: breakCount + 60
              });
            }}
          />
        </div>
      </div>
      <div>
        <h4 id="session-label">Work Length</h4>
        <div className="crement-container">
          <Button
            id={"session-decrement"}
            Arrow={"down"}
            disabled={workCount === 60}
            onClickFunction={() => {
              if (workCount === 60) return;
              setCounts({
                ...counts,
                workCount: workCount - 60
              });
            }}
          />{" "}
          <div id="session-length">{workCount / 60} </div>
          <Button
            id={"session-increment"}
            disabled={workCount === 3600}
            Arrow={"up"}
            onClickFunction={() => {
              if (workCount === 3600) return;
              setCounts({
                ...counts,
                workCount: workCount + 60
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Timers;
