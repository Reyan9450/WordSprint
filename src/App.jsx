import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowTextContainer from './component/DisplayText/ShowTextContainer.jsx'
import TypeTextContainer from './component/TypeText/TypeTextContainer.jsx'
import CalulateWPM from './component/CalculateWPM/CalulateWPM'
import TestContainer from './component/TestContainer/testContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestContainer />

    </>
  )
}

export default App
