import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateWPM } from '../../CalculateWPM/calculate.js';

function CalulateWPM() {
    const { text, input, wpm, timer , initialTimer} = useSelector((state) => state.typing);
    const dispatch = useDispatch();

    // Use useEffect to safely handle side effects when timer changes
    useEffect(() => {
        if (timer === 0) {
            calculateWPM(input, text, dispatch, initialTimer);
        }
    }, [timer, input, text, dispatch]); // Dependency array ensures it runs when `timer` changes

    return (
        <div>
            <p>WPM: {wpm}</p>
        </div>
    );
}

export default CalulateWPM;
