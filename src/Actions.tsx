import { useState, useEffect } from "react";
import './css/Actions.css';
import { getSecond, getMinute, getHour } from './utils'

export default function Actions({time}) {
  const [actions, setActions] = useState([])

  const addAction = (type : any) => {
    setActions((a) => a.concat([{
      type: type,
      time: time
    }]))

    // post new action to server
  }

  return (
    <div className="actions">
        <h2>Actions</h2>
        <div className="button-div">
          <button id='goal-button' onClick={ () => { addAction('goal') } }>goal</button>
          <button id='player-change-button' onClick={ () => { addAction('change') } }>change</button>
          <button id='card-button' onClick={ () => { addAction('card') } }>card</button>
        </div>
        <div className="actions-list">
          {
            actions.slice(-5,-1).map((a) => 
          <a>{getHour(a.time).toString().padStart(2, '0')}:
             {getMinute(a.time).toString().padStart(2, '0')}:
             {getSecond(a.time).toString().padStart(2, '0')}  {a.type}</a>
          )}
        </div>
    </div>
  );
}