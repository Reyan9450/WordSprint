import { setWpm } from "../store/slice.js";

// This function can now be imported and called in any other file
export const calculateWPM = (input, text, dispatch, timer) => {
    console.log("initial timer",timer);
    let timeElapsed;

    // Adjust timeElapsed based on the timer value
    if (timer === 30) {
        timeElapsed = 0.5;
    } else if (timer === 15) {
        timeElapsed = 0.25;
    } else {
        timeElapsed = 1; // Default value
    }

    // Ensure both text and input are not empty
    if (text.trim() !== "" && input.trim() !== "") {
        const inputWords = input.trim().split(/\s+/); // Split input into words
        const textWords = text.trim().split(/\s+/);   // Split reference text into words

        // Count the number of correctly typed words
        let correctWords = 0;
        for (let i = 0; i < inputWords.length; i++) {
            if (inputWords[i] === textWords[i]) {
                correctWords++;
            }
        }

        // Calculate WPM based on correctly typed words
        const wpm = Math.round(correctWords / timeElapsed); // Words per minute

        // Dispatch the WPM to the store
        dispatch(setWpm(wpm));
        console.log(`Calculated WPM: ${wpm}`);
    } else {
        console.log("Text or input is empty, skipping WPM calculation.");
    }
};
