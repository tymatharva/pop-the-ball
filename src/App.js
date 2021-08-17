import './App.scss';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import GameContainer from './components/GameContainer';
import ScoreContainer from './components/ScoreContainer';
import TwoBetScoreContainer from './components/TwoBetScoreContainer';
import "./styles/common.scss"
import { useState } from 'react';

function App() {
  const [twoBet, setTwoBet] = useState(false); 
  return (
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
  );
}

export default App;
