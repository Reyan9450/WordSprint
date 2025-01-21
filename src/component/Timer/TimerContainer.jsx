import React from 'react';
import TimerPresenter from './TimerPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { setTimer,setInitialTimer } from '../../store/slice.js';
import { resetState } from '../../store/slice.js';

function TimerContainer() {
  const timerOptions = [60, 30, 15]; // Array of timer options
  const dispatch = useDispatch();

  const handleTimeChange = (time) => {

    console.log('Dispatching setTimer with value:', time);
    dispatch(resetState({ timer: time }));
    dispatch(setInitialTimer(time));
    // Dispatch the selected timer value to Redux

  };

  return (
    <div
       className="timerContainer"
       style={{
       display: 'flex',
       justifyContent: 'space-around',
       alignItems: 'center',
       width: '25%',
      }}
    >
      {timerOptions.map((time, index) => (
        <TimerPresenter key={index} timer={time} onClick={handleTimeChange} />
      ))}
    </div>
  );
}

export default TimerContainer;
