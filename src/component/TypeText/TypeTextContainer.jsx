import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue as updateReduxInputValue,
  resetState,
  setRunning,
} from "../../store/slice";
import TypeTextPresenter from "./TypeTextPresenter";


const TypeTextContainer = () => {
  const dispatch = useDispatch();
  const timerValue = useSelector((state) => state.typing.timer);
  const inputText = useSelector((state) => state.typing.input);
  const running = useSelector((state) => state.typing.running);

  // Sync Redux inputText with local inputValue
  useEffect(() => {
    dispatch(updateReduxInputValue(inputText || "")); // Ensure it's empty string, not 0
  }, [inputText, dispatch]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      console.log("Component unmount: Dispatching resetState without timerValue");
      dispatch(resetState());
    };
  }, [dispatch]);

  // Handle input change
  const handleChange = (value) => {
    dispatch(updateReduxInputValue(value)); // Update Redux state
  };

  // Handle key press to start the timer
  const handlePress = () => {
    if (!running) {
      dispatch(setRunning(true)); // Start the timer in Redux
    }
  };

  return (
    <>
      <TypeTextPresenter
  timer={timerValue} // Pass the timer value
  inputValue={inputText}
  handleChange={handleChange}
  handlePress={handlePress}
/>

    </>
  );
};

export default TypeTextContainer;
