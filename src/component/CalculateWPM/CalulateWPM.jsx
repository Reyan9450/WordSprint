import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { calculateWPM } from '../../CalculateWPM/calculate.js';

function CalulateWPM() {
    const { text, input, wpm } = useSelector((state) => state.typing);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        calculateWPM(input, text, dispatch); // Call the function when needed
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Calculate WPM</button>
            <p>WPM: {wpm}</p>
        </div>
    );
}

export default CalulateWPM