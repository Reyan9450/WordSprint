import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimer, setRunning } from "../../store/slice";

const ShowTimer = () => {
  const timer = useSelector((state) => state.typing.timer);
  const running = useSelector((state) => state.typing.running);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;

    if (running && timer > 0) {
      interval = setInterval(() => {
        dispatch(setTimer(timer - 1)); // Decrement the timer
      }, 1000);
    }

    if (timer === 0 && running) {
      dispatch(setRunning(false)); // Stop the timer when it reaches 0
    }

    return () => {
      clearInterval(interval); // Cleanup interval on unmount or when running changes
    };
  }, [running, timer, dispatch]);

  return (
    <div>
      <p>Timer: {timer}</p>
      
    </div>
  );
};

export default ShowTimer;
