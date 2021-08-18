import React, { useState, useEffect } from 'react'

// Styles 
import "../styles/GameContainer.scss"

// Assets
import Logo from "../assets/Logo.png"
import Bg1 from "../assets/bg1.png"
import Bg2 from "../assets/bg2.png"
import Planet1 from "../assets/Planet1.png"
import Planet2 from "../assets/Planet2.png"
import Cloud1 from "../assets/Cloud1.png"
import Cloud2 from "../assets/Cloud2.png"

// Components
import YellowCustomLoader from './mini/YellowCustomLoader'


const GameContainer = () => {
    const [shoot, setShoot] = useState(false);
    const [waitforit, setWaitforit] = useState(false);
    const [blast, setBlast] = useState(false);
    const [waitForBlast, setWaitForBlast] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    // const [timer, setTimer] = useState()

    useEffect(() => {
        const shootInterval = setInterval(() => {
            setTimeout(() => {
                setShowLoader(false);
                setShoot(true);
                setTimeout(() => {
                    // setShoot(false);
                    setWaitforit(true);
                }, 1000)
    
                setTimeout(() => {
                    setBlast(true);
                    setTimeout(() => {
                        setWaitForBlast(true);
                    }, 700)
                }, 3000);
            }, 1000); 

        }, 10000);
        return () => clearInterval(shootInterval) 
    }, [])

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
                <div className={`bg-layer-1 ${waitforit ? "shift-down" : ""}`}><img src={Bg1} alt="" /></div>

                {/* BG 2 */}
                <div className={`bg-layer-2 ${waitforit   ? "shift-down" : ""}`}><img src={Bg2} alt="" /></div>

                {/* Stars */}
                <div className={`stars2  ${waitforit && !blast  ? "star-animation" : "star-animation paused"}`}></div>

                {/* Ball */}
                {
                    !blast ? <div className={`ball ${shoot ? "ball-anim" : ""}`}></div> : null
                }
                

                {/* Trail */}
                {
                    !blast ?  <div className={`trail ${shoot ? "trail-anim" : ""}`}></div> : null
                }
               

                {/* Planet 1 */}
                <div className={`planet1 shift-left-more ${waitforit&& !blast ? "" : "paused"}`}><img src={Planet1} alt="" /></div>

                {/* Planet 2 */}
                <div className={`planet2 shift-left-more ${waitforit && !blast? "" : "paused"}`}><img src={Planet2} alt="" /></div>

                {/* Gradient Layer */}
                <div className={`gradient-layer  ${waitforit && !blast ? "shift-down" : " paused"}`}></div>
                {
                    shoot ?  <div className={`gun ${waitforit ? "shift-left" : ""}`}></div> : <div className="idle"></div>
                }

                {
                    !blast ? (waitforit ? <div className="score">1.91X</div> : null) : null
                }
                
                
                {/* <div className="gun"></div> */}

                {/* Blast */}
                {
                    blast && <div className="blast"></div>
                }
                

                {
                    waitForBlast ? (
                        <>
                            {/* Cloud 1 */}
                            <div className="cloud1">
                                <img src={Cloud1} alt="" />
                            </div>

                            {/* Cloud 2 */}
                            <div className="cloud2">
                                <img src={Cloud2} alt="" />
                            </div>

                            {/* Game Result */}
                            <div className="game-result">
                                <div className="game-result-text">Game Result</div>
                                <div className="game-result-score">1.34x</div>
                            </div>
                        </>
                    ) : null
                }
                {
                    showLoader ? (
                        <div className="yellow-loader-container">
                            <div className="yellow-loader-content">
                                <div className="yellow-loader-timer">10.3</div>
                                <div className="yellow-loader-text">Waiting for the next round</div>
                            </div>
                            <YellowCustomLoader />
                        </div>
                    ) : null
                }
                
            </div>
            {/* Game Ends */}

        </div>
    )
}

export default GameContainer
