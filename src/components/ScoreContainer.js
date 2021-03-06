import React, { useState } from 'react'

// Styles 
import "../styles/ScoreContainer.scss"
import "../styles/common.scss"

// Icons
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Assets
import avatar from "../assets/avatar.png"
import CustomSwitch from './mini/CustomSwitch';


const ScoreContainer = ({ setTwoBet }) => {
    const [autoBetState, setAutoBetState] = useState(false);
    const [autoCashOutState, setAutoCashOutState] = useState(false);
    const [multiplier, setMultiplier] = useState(1.01);
    const [betValue, setBetValue] = useState(100);

    const betStyles = {
        color: "var(--popYellow)", 
        fontSize: "2.5rem",
        padding: "0rem 0.5rem",
        cursor: "pointer",
    }

    const multiplierStyles = {
        left: {
            color: "var(--popBlue)", 
            fontSize: "2.25rem",
            paddingRight: "0.5rem",
            cursor: "pointer",
            opacity: `${multiplier === 1.01 ? 0.2 : 1}`,
        },
        right : {
            color: "var(--popBlue)", 
            fontSize: "2.25rem",
            paddingLeft: "0.5rem",
            cursor: "pointer",
        }
    }
    
    
    function handleBetChange(){
        setAutoBetState(!autoBetState)
    }
    function handleCashOutChange(){
        setAutoCashOutState(!autoCashOutState)
    }

    return (
        <div className="score-container container-border">
            {/* Left Container Starts */}
            <div className="score-container__left">
                <div className="sc__betamt">
                    <div className="betamt__container">
                        <div className="betamt__minus" onClick={() => {
                            if(betValue === 100) return ;
                            else setBetValue(betValue - 100);
                        }}>
                            <FontAwesomeIcon icon={faMinusCircle} style={betStyles} />
                        </div>
                        <div className="bet__amt">{betValue}</div>
                        <div className="betamt__plus" onClick={() => setBetValue(betValue + 100)}>
                            <FontAwesomeIcon icon={faPlusCircle} style={betStyles} />
                        </div>
                    </div>
                </div>
                <div className="sc__autobet">
                    <div className="sc__autobet__container">
                        <div className="sc__autobet__text">Auto Bet</div>
                        {/* <Switch style={{color: `${autoBetState ? "#00FF31" : "#005791"}`}} inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" onChange={handleBetChange}/> */}
                        <CustomSwitch checked={autoBetState} handleCheckedChange={handleBetChange} />
                    </div>
                </div> 
                <div className="sc__grid">
                    <div className="sc__grid__item" onClick={() => setBetValue(500)}>500</div>
                    <div className="sc__grid__item" onClick={() => setBetValue(1000)}>1000</div>
                    <div className="sc__grid__item" onClick={() => setBetValue(2000)}>2000</div>
                    <div className="sc__grid__item" onClick={() => setBetValue(3000)}>3000</div>
                    <div className="sc__grid__item" onClick={() => setBetValue(4000)}>4000</div>
                    <div className="sc__grid__item" onClick={() => setBetValue(5000)}>5000</div>
                </div>
                {/* Multiplier Starts */}
                    <div className="sc__multiplier">
                        <div className="sc__multiplier__container">
                            <div className="mul__minus" onClick={() => setMultiplier(multiplier - 0.01)}>
                                <FontAwesomeIcon icon={faMinusCircle} style={multiplierStyles.left} />
                            </div>
                            
                            {/* <div className="mul__amt">x{multiplier}</div> */}
                            <div className="mul__amt">x{multiplier.toFixed(2)}</div>
                            <div className="mul__plus" onClick={() => setMultiplier(multiplier + 0.01)}>
                                <FontAwesomeIcon icon={faPlusCircle} style={multiplierStyles.right} />
                            </div>
                        </div>
                    </div>
                {/* Multiplier Ends */}
                <div className="sc__autocashout">
                    <div className="sc__autocashout__container">
                        <div className="sc__autocashout__text">Auto Cashout</div>
                        {/* <Switch style={{color: `${autoCashOutState ? "#00FF31" : "#005791"}`}} inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" onChange={handleCashOutChange}/> */}
                        <CustomSwitch checked={autoCashOutState} handleCheckedChange={handleCashOutChange} />
                    </div>
                </div>
            </div>
            {/* Left Container Ends */}

            {/* Right Container Starts */}
            <div className="score-container__right">
                <div className="sc__right__icon">
                    <div className="sc__right__icon__container">
                        <img src={avatar} alt="user icon" />
                    </div>
                </div>
                <div className="sc__right__points">
                    <div className="sc__right__points__container">
                        <div className="sc__right__points__username">ssbossss</div>
                        <div className="sc__right__points__button">0 Pts</div>
                    </div>
                </div>
                <div className="sc__right__bet">
                    <div className="sc__right__bet__btn">
                        {/* <div className="sc__right__bet__btn__text">BET FOR NEXT ROUND</div> */}
                    </div>
                </div>
                <div className="sc__right__newbet">
                    <div className="sc__right__newbet__container">
                        <div className="sc__right__newbet__text">NEW BET</div>
                        {/* <div className="sc__right__newbet__icon" onClick={() => setTwoBet(true)}> */}

                        {/* Two Bet Container is available, just uncomment the above line */}
                        <div className="sc__right__newbet__icon">
                            <FontAwesomeIcon icon={faPlus} style={{fontSize: "1.75rem", color: "white"}} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Container Ends */}

        </div>
    )
}

export default ScoreContainer
