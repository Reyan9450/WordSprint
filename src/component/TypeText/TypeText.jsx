import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue as updateReduxInputValue } from "../../store/slice";

function TypeText() {
  const [timer, setTimer] = useState(60);
  const [running, setRunning] = useState(false); // Check if the timer is running
  const [inputValue, setInputValue] = useState(""); // Local state for input value

  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (running && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setRunning(false);
      dispatch(updateReduxInputValue(inputValue)); // Dispatch the Redux action
    }
    return () => {
      clearInterval(interval);
    };
  }, [running, timer, dispatch, inputValue]); // Add dependencies

  const handlePress = (e) => {
    if (running) {
      return;
    } else {
      setTimer(60);
      setRunning(true);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update the local state
  };

  return (
    <>
      <Box sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
        <TextField
          label="Write something..."
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleChange} // Handle changes in the text field
          onKeyDown={handlePress}
        />
      </Box>
      <p>Timer: {timer}</p>
    </>
  );
}

export default TypeText;
