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
            Arrow={"up"}
            onClickFunction={() =>
              setCounts({
                ...counts,
                breakCount: breakCount - 60
              })
            }
          />{" "}
          {breakCount / 60}{" "}
          <Button
            Arrow={"up"}
            onClickFunction={() =>
              setCounts({
                ...counts,
                breakCount: breakCount + 60
              })
            }
          />
        </div>
      </div>
      <div>
        <h4>Break Length</h4>
        <div className="crement-container">
          <Button
            Arrow={"down"}
            onClickFunction={() =>
              setCounts({
                ...counts,
                workCount: workCount - 60
              })
            }
          />{" "}
          {workCount / 60}{" "}
          <Button
            Arrow={"up"}
            onClickFunction={() =>
              setCounts({
                ...counts,
                workCount: workCount + 60
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Timers;
