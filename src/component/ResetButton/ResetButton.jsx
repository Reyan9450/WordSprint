import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../store/slice';

function ResetButton() {
    const dispatch = useDispatch();
    const time = useSelector((state) => state.typing.initialTimer);

    // Function to handle reset
    function handleReset(timerValue) {
        dispatch(resetState({ timer: timerValue }));
    }

    return (
        <>
            <button onClick={() => handleReset(time)}>Reset</button>
        </>
    );
}

export default ResetButton;
