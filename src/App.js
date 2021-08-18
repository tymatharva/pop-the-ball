import './App.scss';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import GameContainer from './components/GameContainer';
import ScoreContainer from './components/ScoreContainer';
import TwoBetScoreContainer from './components/TwoBetScoreContainer';
import "./styles/common.scss"
import { useEffect, useState } from 'react';
import Modal from "react-modal"
import Land from "./assets/unnamed.png"

function App() {
  const [twoBet, setTwoBet] = useState(false);
  const [orient, setOrient] = useState(true); 
  // Modal.setAppElement('#yourAppElement');
  window.addEventListener("orientationchange", () => {
    console.log("orientation changed")
    if(window.matchMedia("(orientation: landscape)").matches){
      setOrient(true);
    } else setOrient(false);
  })

  useEffect(() => {
      if(window.matchMedia("(orientation: landscape)").matches){
        setOrient(false);
      } else setOrient(true);
  }, []);
  return (
    <>
    {
      !orient ? (
        <>
        <div className="main-container">
              {/* <Game /> */}
              {/* Left Sidebar */}
              <LeftSidebar />
              {/* Right Sidebar */}
              <RightSidebar />
              {/* Game Container */}
              <GameContainer />
              {/* Score Container */}
              {
                twoBet ? <TwoBetScoreContainer setTwoBet={setTwoBet} /> : <ScoreContainer setTwoBet={setTwoBet} />
              }
        </div>
            </>
        ) : (
          <div className="orientation-img">
            <img src={Land} alt="" />
            <div className="orient-text">Please rotate to start</div>
          </div>
        )
      }
      </>
  );
}

export default App;
