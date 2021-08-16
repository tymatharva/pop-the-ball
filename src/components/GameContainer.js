import React from 'react'
import "../styles/GameContainer.css"
import Logo from "../assets/Logo.png"
import Idle from './sprites/Idle'

const GameContainer = () => {
    return (
        <div className="game-container container-border">
            {/* Pop logo Starts*/}
            <div className="game-logo-container">
                <img src={Logo} className="game-logo" alt="" />
            </div>
            {/* Pop logo Ends*/}

            {/* Game Starts */}
            <div className="game-screen container-border">
                
                <Idle />
            </div>
            {/* Game Ends */}
            {/* <h1>From Game Container</h1> */}
        </div>
    )
}

export default GameContainer
