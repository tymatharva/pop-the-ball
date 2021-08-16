import './App.scss';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import GameContainer from './components/GameContainer';
import ScoreContainer from './components/ScoreContainer';
import "./styles/common.scss"

function App() {
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
      <ScoreContainer />
    </div>
  );
}

export default App;
