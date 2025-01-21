import React from 'react'
import TypeTextContainer from '../TypeText/TypeTextContainer'
import ShowTextContainer from '../DisplayText/ShowTextContainer'
import CalulateWPM from '../CalculateWPM/CalulateWPM'
import TimerContainer from '../Timer/TimerContainer'
import ResetButton from '../ResetButton/ResetButton'
import ShowTimer from '../ShowTimer/ShowTimer'

import './testContainer.css'

function TestContainer() {
  return (
    <div className="test-container">
        <TimerContainer />
        <ShowTextContainer />
        <TypeTextContainer />
        <CalulateWPM />
        <ResetButton />
        <ShowTimer />
    </div>
  )
}

export default TestContainer
