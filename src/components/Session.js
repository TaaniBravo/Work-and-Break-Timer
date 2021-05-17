import React from "react";
import { useCountsContext } from "../hooks/useCounts";

// CURRENTLY NEED TO FIGURE OUT HOW I AM GOING TO MAKE SURE ALL INTERVALS
// ARE CLEARED WHEN TRYING TO PAUSE.

const Session = () => {
  // Call our Global State
  const [counts, setCounts] = useCountsContext();
  const { workCount, breakCount, onBreak, timerOn } = counts;

  // Declare some variables we will need to refine as we go.
  let countdown = 0;
  let interval;

  const customClearInterval = () => {
    let highestInterval = setInterval(";");
    for (let i = 0; i < highestInterval; i++) {
      clearInterval(i);
    }
  };

  // Interval function for the session timer.
  const sessionInterval = () => {
    // IF workcount is EQUAL to the countdown integer THEN...
    if (workCount === countdown) {
      // Clear the interval
      // clearInterval(interval);
      customClearInterval();
      // interval = undefined;

      // Set our onBreak boolean to true.
      setCounts({ ...counts, onBreak: true, timerOn: true });

      // Set countdown back to zero.
      countdown = 0;

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
      countdown++;
      document.getElementById("time-left").innerHTML = formatTimer(
        workCount - countdown
      );
    }
  };

  // Interval function for the break timer.
  const breakInterval = () => {
    // IF the breakCount is EQUAL to countdown THEN...
    if (breakCount === countdown) {
      // Run resetTimer function.
      resetTimer();

      // ELSE...
    } else {
      // Add 1 to countdown integer.
      countdown++;
      // Update the element with correct timer count.
      document.getElementById("time-left").innerHTML = formatTimer(
        breakCount - countdown
      );
    }
  };

  // Function to reset the timer to base settings.
  const resetTimer = () => {
    // clearInterval(interval);
    customClearInterval();
    // interval = undefined;
    console.log(interval);

    countdown = 0;

    setCounts({
      ...counts,
      workCount: 1500,
      breakCount: 300,
      onBreak: false,
      timerOn: false
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

    return min + ":" + sec;
  };

  const controlTime = () => {
    if (!timerOn) {
      !onBreak
        ? (interval = setInterval(sessionInterval, 1000))
        : (interval = setInterval(breakInterval, 1000));
    } else {
      // clearInterval(interval);
      customClearInterval();
    }

    setCounts({
      ...counts,
      timerOn: !timerOn
    });

    console.log(timerOn);
  };

  return (
    <div>
      <h4 id="timer-label">Session</h4>
      <h2 id="time-left">{formatTimer(workCount - countdown)}</h2>
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
