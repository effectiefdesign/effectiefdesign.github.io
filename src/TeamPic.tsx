// import { useState, useEffect } from 'react'
import './TeamPic.css'
// window.fetch(apiUrl)
//   .then(response => response.json())
//   .then(populate picture, name, players list)

export default function TeamPic({team}) {
  // const [team, setTeam] = useState({
  //   name: '',
  //   players: [],
  // });

  // console.log(team.name)
  // console.log(team.pic)
  // console.log(team.players)

  // useEffect(() => {
  //   window.fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       setTeam(data);
  //     });
  // }, []);

  return (
    <div>
      <h5> Team name </h5>
      <div className="team-pic">
        <h2>Team Pic</h2>
        {/* <img id="team-pic-img" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img> */}
      </div>
    </div>
  );
}