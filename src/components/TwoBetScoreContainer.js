import React from 'react'
import "../styles/TwoBetScoreContainer.scss"
import { faPlusCircle, faMinusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TwoBetScoreContainer = () => {
    const betStyles = {
        color: "var(--popYellow)", 
        fontSize: "2rem",
        padding: "0rem 0.5rem",
        cursor: "pointer",
    }
    return (
        <div className="tb_score-container container-border">
            {/* <h1>From two bet container</h1> */}
            {/* Left Container Starts*/}
            <div className="sc__left_container">
                <div className="margin-box">
                    <div className="bet__container">
                        <div className="bet__container__left">
                        <div className="betamt__container">
                        <div className="betamt__minus">
                            <FontAwesomeIcon icon={faMinusCircle} style={betStyles} />
                        </div>
                        <div className="bet__amt">100</div>
                        <div className="betamt__plus">
                            <FontAwesomeIcon icon={faPlusCircle} style={betStyles} />
                        </div>
                    </div>
                        </div>
                        <div className="bet__container__right"></div>
                    </div>
                    <div className="bet__grid"></div>
                    <div className="bet__cashout"></div>
                    <div className="bet__button"></div>
                </div>
            </div>
            {/* Left Container Ends*/}
            {/* Middle Container Starts */}
            <div className="sc__left_container" style={{marginLeft: "3px"}}></div>
            {/* Middle Container Ends*/}
            {/* Right Container Starts*/}
            <div className="sc__right_container"></div>
            {/* Right Container Ends*/}
        </div>
    )
}

export default TwoBetScoreContainer
