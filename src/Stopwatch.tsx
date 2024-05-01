import { useState, useEffect, useRef } from 'react'
import './css/Stopwatch.css'
import Actions from './Actions'
import { getSecond, getMinute, getHour } from './utils'

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let interval = useRef()
  
  const startStop = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  useEffect(() => {
    if (isActive) {
      interval.current = setInterval(() => {setTime((s) => s + 1)}, 1000)
    } else {
      clearInterval(interval.current)
    }
  }, [isActive])

  return (
    <div className="stopwatch">
      <h2>Time</h2>
      <p>{getHour(time).toString().padStart(2, '0')}: 
         {getMinute(time).toString().padStart(2, '0')}: 
         {getSecond(time).toString().padStart(2,'0')}</p>
      <button id='start-stop' onClick={ startStop }>{ isActive ? "stop" : "start" }</button>
      <Actions time={time} />
    </div>
    
  );
}