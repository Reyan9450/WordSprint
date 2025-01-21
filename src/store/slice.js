import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  text: "",
  wpm: 0,
  input: 0,
  timer: 30, // Default timer value
  initialTimer: 30, // Initial timer value
  running: false, // Add running state
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    setTypedText: (state, action) => {
      state.text = action.payload;
    },
    setInputValue: (state, action) => {
      state.input = action.payload;
    },
    setWpm: (state, action) => {
      state.wpm = action.payload;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
    setInitialTimer: (state, action) => {
      state.initialTimer = action.payload; // Set the initial timer value
    },
    setRunning: (state, action) => {
      state.running = action.payload; // Update the running state
    },
    // Reset state to its initial values, allowing a custom timer
    resetState: (state, action) => {
      console.log("resetState called with payload:", action.payload);
      const newTimer = action.payload?.timer || initialState.timer; // Use payload timer or default
      const newInitialTimer =
        action.payload?.initialTimer || initialState.initialTimer; // Use payload initialTimer or default
      return { ...initialState, timer: newTimer, initialTimer: newInitialTimer };
    },
  },
});

export const {
  setTypedText,
  setInputValue,
  setWpm,
  setTimer,
  setInitialTimer, // Export the setInitialTimer action
  setRunning,
  resetState,
} = typingSlice.actions;

export default typingSlice.reducer;
