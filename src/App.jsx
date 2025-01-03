import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowText from './component/DisplayText/ShowText'
import TypeText from './component/TypeText/TypeText'
import CalulateWPM from './component/CalculateWPM/CalulateWPM'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowText />
      <TypeText />
      <CalulateWPM />
    </>
  )
}

export default App
