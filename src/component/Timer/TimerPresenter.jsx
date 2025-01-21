import React from 'react';
import './timerPresenter.css';

function TimerPresenter({ timer, onClick }) {
  return (
    <div
      className="timerPresenter"
      onClick={() => onClick(timer)} // Pass the timer value when clicked
      style={{
        cursor: 'pointer', // Indicate it's clickable
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      {timer}
    </div>
  );
}

export default TimerPresenter;
