import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css'
import Stopwatch from './Stopwatch'
import TeamPic from './TeamPic'


function App() {
  // const [count, setCount] = useState(0)
  const [img1, setImg1] = useState("")
  const [img2, setImg2] = useState("")

  const image1Url = "https://i.imgur.com/40Sso5n.png"
  const team1name = "Challengers"
  const image2Url = "https://i.imgur.com/itdf6LJ.png"
  const team2name = "Kraken"

  const fetchTeams = async () => {
    const res1 = await fetch(image1Url);
    const image1Blob = await res1.blob();
    const image1ObjectURL = URL.createObjectURL(image1Blob);
    setImg1(image1ObjectURL);
    const res2 = await fetch(image2Url);
    const image2Blob = await res2.blob();
    const image2ObjectURL = URL.createObjectURL(image2Blob);
    setImg2(image2ObjectURL);
  };
  
  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <>
      <div className="card">
        <TeamPic team={{name: team1name, img:img1}}/>
        <Stopwatch />
        <TeamPic team={{name: team2name, img:img2}}/>
      </div>
    </>
  )
}

export default App
