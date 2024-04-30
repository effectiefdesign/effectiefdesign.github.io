import { useState, useEffect } from "react";
import './Actions.css';

export default function Actions() {
  const [actions, setActions] = useState([{
    type: 'start',
    time: 0
  }])

  useEffect(() => {
      console.log('actions', actions)
    }, [])

  // useEffect(() => {
  //   window.fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       setTeam(data);
  //     });
  // }, []);

  const formatTime = (seconds : number) => {
    let second = seconds % 60
    let minute = Math.floor(seconds / 60) % 60
    let hour = Math.floor(Math.floor(seconds / 60) / 60 )
    return "" + hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0') + ":" + second.toString().padStart(2, '0')
  }

  
  const addAction = (type : any) => {
    const currentTime = 0
    setActions((a) => a.concat([{
      type: type,
      time: currentTime
    }]))
  }

  return (
    <div>
      <h2>Actions</h2>
      <div className="actions">
        {
          actions.slice(-5,-1).map((a) => 
        <a>{formatTime(a.time)} {a.type}</a>
        )}
      </div>
      
      
      <button id='goal-button' onClick={ () => { addAction('goal') } }>goal</button>
      <button id='player-change-button' onClick={ () => { addAction('player-change') } }>player-change</button>
    </div>
  );
}