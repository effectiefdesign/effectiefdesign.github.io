import { useState, useEffect } from 'react'
import './Stopwatch.css'

export default function Stopwatch() {
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let minute = 0
  let hour = 0

  // let window.interval
  let interval : any
  
  function startStop() {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        if (second == 60) {
          setSecond(0)
          minute = minute + 1
        } else {
          setSecond((s) => s + 1)
        }
        if (minute == 60) {
          minute = 0
          hour = hour + 1
        }
      }, 1000)
    } else {
      clearInterval(interval)
    }
  }, [isActive])

  return (
    <div className="stopwatch">
      <h2>Time</h2>
      <p>{hour.toString().padStart(2, '0')} : {minute.toString().padStart(2, '0')} : {second.toString().padStart(2,'0')}</p>
      <button id='start-stop' onClick={ startStop }>{ isActive ? "stop" : "start" }</button>
    </div>
  );
}