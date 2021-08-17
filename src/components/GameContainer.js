import React from 'react'
import "../styles/GameContainer.scss"
import Logo from "../assets/Logo.png"
import Idle from './sprites/Idle'
import Gun from './sprites/Gun'
import Bg1 from "../assets/bg1.png"
import Bg2 from "../assets/bg2.png"
import Stars2 from "../assets/stars2.png"
import Planet1 from "../assets/Planet1.png"
import Planet2 from "../assets/Planet2.png"

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
                
                {/* BG 1 */}
                <div className="bg-layer-1"><img src={Bg1} alt="" /></div>

                {/* BG 2 */}
                <div className="bg-layer-2"><img src={Bg2} alt="" /></div>

                {/* Stars */}
                <div className="stars2 star-animation"><img src={Stars2} alt="" /></div>
                <div className="stars2 star-animation pos-top-left"><img src={Stars2} alt="" /></div>
                <div className="stars2 star-animation pos-bot-right"><img src={Stars2} alt="" /></div>
                <div className="stars2 star-animation pos-bot-left"><img src={Stars2} alt="" /></div>

                {/* Planet 1 */}
                <div className="planet1"><img src={Planet1} alt="" /></div>

                {/* Planet 2 */}
                <div className="planet2"><img src={Planet2} alt="" /></div>

                {/* Gradient Layer */}
                <div className="gradient-layer"></div>
                <Idle />
                {/* <Gun /> */}
            </div>
            {/* Game Ends */}

        </div>
    )
}

export default GameContainer
