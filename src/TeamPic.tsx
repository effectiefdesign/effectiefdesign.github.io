import './css/TeamPic.css'

export default function TeamPic({team}) {

  return (
    <div>
      <h5> {team.name} </h5>
      <div className="team-pic">
        <h2>Team Pic</h2>
         <img src={team.img} alt="icons" />
      </div>
    </div>
  );
}