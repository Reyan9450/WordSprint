import { useSelector, useDispatch } from "react-redux";
import { setWpm } from "../store/slice.js" // Assuming setWpm is an action in your slice

// This function can now be imported and called in any other file
export const calculateWPM = (input, text, dispatch) => {
    // Ensure both text and input are not empty
    if (text.trim() !== "" && input.trim() !== "") {
        const wordsTyped = input.trim().split(/\s+/).length; // Count words in input
        const timeElapsed = 1; // Replace with actual elapsed time in minutes
        const wpm = Math.round(wordsTyped / timeElapsed); // Calculate WPM (words per minute)

        // Dispatch the WPM to the store
        dispatch(setWpm(wpm));
        console.log(`Calculated WPM: ${wpm}`);
    } else {
        console.log("Text or input is empty, skipping WPM calculation.");
    }
};
