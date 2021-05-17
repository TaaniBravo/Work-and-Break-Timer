import React from "react";
import { intervalCollection } from "time-events-manager";
import { useCountsContext } from "../hooks/useCounts";

// CURRENTLY TRYING TO FIGURE OUT WHY MY COUNTER VARIABLE KEEPS RESETTING TO O.

const Session = () => {
  // Call our Global State
  const [counts, setCounts] = useCountsContext();
  const { workCount, breakCount, onBreak, timerOn } = counts;

  // Declare some variables we will need to refine as we go.
  let counter = 0;
  let interval;

  const customClearInterval = () => {
    console.log(counter);
    const allIntervals = intervalCollection.getAll();

    clearInterval(allIntervals[0].id);
  };

  // Interval function for the session timer.
  const sessionInterval = () => {
    // IF workcount is EQUAL to the countdown integer THEN...
    if (workCount === counter) {
      // Clear the interval
      // clearInterval(interval);
      customClearInterval();
      // interval = undefined;

      // Set our onBreak boolean to true.
      setCounts({ ...counts, onBreak: true, timerOn: true });

      // Set countdown back to zero.
      counter = 0;

      // Display the correct data to the elements.
      document.getElementById("timer-label").innerHTML = "Break Time!";
      document.getElementById("time-left").innerHTML = formatTimer(breakCount);

      // AFTER 1 second set the interval to the breakInterval repeating every 1 second.
      setTimeout(() => {
        interval = setInterval(breakInterval, 1000);
      }, 1000);

      // ELSE...
    } else {
      // Add number to the countdown then update the element displaying time.
      counter++;
      document.getElementById("time-left").innerHTML = formatTimer(
        workCount - counter
      );
    }
  };

  // Interval function for the break timer.
  const breakInterval = () => {
    // IF the breakCount is EQUAL to countdown THEN...
    if (breakCount === counter) {
      // Run resetTimer function.
      resetTimer();

      // ELSE...
    } else {
      // Add 1 to countdown integer.
      counter++;
      // Update the element with correct timer count.
      document.getElementById("time-left").innerHTML = formatTimer(
        breakCount - counter
      );
    }
  };

  // Function to reset the timer to base settings.
  const resetTimer = () => {
    customClearInterval();

    counter = 0;

    setCounts({
      ...counts,
      workCount: 1500,
      breakCount: 300,
      onBreak: false,
      timerOn: false
    });

    document.getElementById("timer-label").innerHTML = "Session";

    document.getElementById("time-left").innerHTML = formatTimer(
      workCount - counter
    );
  };

  const formatTimer = seconds => {
    let min = parseInt(seconds / 60);
    let sec = seconds % 60;

    if (min.toString().length === 1) min = "0" + min;
    if (sec.toString().length === 1) sec = "0" + sec;

    return min + ":" + sec;
  };

  const controlTime = () => {
    if (!timerOn) {
      !onBreak
        ? (interval = setInterval(sessionInterval, 1000))
        : (interval = setInterval(breakInterval, 1000));
    } else {
      console.log(counter);
      customClearInterval();
      console.log(counter);
    }

    setCounts({
      ...counts,
      timerOn: !timerOn
    });
  };

  return (
    <div>
      <h4 id="timer-label">Session</h4>
      <h2 id="time-left">{formatTimer(workCount - counter)}</h2>
      <div className="button-container">
        <button onClick={controlTime} id="start_stop">
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
