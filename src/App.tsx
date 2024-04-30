// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './Stopwatch'
import TeamPic from './TeamPic'
import Actions from './Actions'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <TeamPic />
        <Stopwatch />
        <TeamPic />
      </div>
      <Actions />
    </>
  )
}

export default App
