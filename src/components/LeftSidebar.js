import React, { useState } from 'react'
import "../App.scss"
import "../styles/LeftSidebar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Switch } from '@material-ui/core';

const LeftSidebar = () => {

    const [audio, setAudio] = useState(false);

    function handleAudioChange(){
        setAudio(!audio)
    }

    const [users, setUsers] = useState([
        {
            name: "A***M",
            bet: 1000,
            coeff: 1.12,
            win: 1120,
            active: true,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: true,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
        {
            name: "B***S",
            bet: 1000,
            coeff: null,
            win: null,
            active: false,
        },
    ]) 
    
    return (
        <div className="left-sidebar container-border">
            <div className="left-sidebar-header">
                <div className="audio-container">
                    <div className="audio-container-text">
                        Audio
                    </div>
                    <div className="audio-container-switch">
                        <Switch style={{color: `${audio ? "#00FF31" : "#005791"}`}} color="primary" onChange={handleAudioChange}/>
                    </div>
                </div>
                {/* OnClick should open info modal */}
                <div className="rules-button">
                    <FontAwesomeIcon icon={faInfoCircle} size='1.2x' />
                </div>
            </div>
            <div className="gradient-container left-sidebar-container">
                {/* <p>Left Sidebar</p> */}
                <div className="leftsb__button__container">
                    <div className="leftsb__button leftsb__button--active">All Bets</div>
                    <div className="leftsb__button">My Bets</div>
                    <div className="leftsb__button">Top Wins</div>
                </div>

                <div className="leftsb__content">
                    <div className="pt__header">
                        <div className="pt__title">User</div>
                        <div className="pt__title">Bet</div>
                        <div className="pt__title">Coeff.</div>
                        <div className="pt__title">Win</div>
                    </div>

                    <div className="pt__rows__container">
                        {
                            users.map(({name, bet, coeff, win, active}) => {
                                return (
                                    <div className={`pt__row__item ${active ? "pt__row__item--active" : ""}`}>
                                        <div className="pt__row__user">{name}</div>
                                        <div className="pt__row__bet">{bet}</div>
                                        <div className="pt__row__coeff">{coeff === null ? "----" : coeff}</div>
                                        <div className="pt__row__win">{win === null ? "----" : win}</div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="pt__row__item pt__row__item--active">
                            <div className="pt__row__user">A***M</div>
                            <div className="pt__row__bet">1000</div>
                            <div className="pt__row__coeff">----</div>
                            <div className="pt__row__win">----</div>
                        </div>
                        <div className="pt__row__item">
                            <div className="pt__row__user">A***M</div>
                            <div className="pt__row__bet">1000</div>
                            <div className="pt__row__coeff">1.12</div>
                            <div className="pt__row__win">1120</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
