import { useState, useEffect } from "react";

const useTimer = (initialTimer, running, onTimerEnd) => {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    let interval;

    if (running && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && running) {
      onTimerEnd(); // Notify parent when timer ends
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [running, timer, onTimerEnd]);

  // Reset timer when initialTimer changes
  useEffect(() => {
    if (!running) {
      setTimer(initialTimer);
    }
  }, [initialTimer, running]);

  return timer;
};

export default useTimer;
