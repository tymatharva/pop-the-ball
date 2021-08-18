import React, { useState } from 'react'
import Modal from "react-modal"

// Styles
import "../App.scss"
import "../styles/LeftSidebar.scss"

// Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

// Components
import CustomSwitch from './mini/CustomSwitch'
import LsAllBets from './mini/LsAllBets'
import LsMyBets from './mini/LsMyBets'
import LsTopWins from './mini/LsTopWins'

const LeftSidebar = () => {

    const [audio, setAudio] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [openModal, setOpenModal] = useState(false)

    function handleAudioChange(checked){
        console.log("Switch", checked);
        setAudio(checked)
    }

    function handleTabChange(selectedTab){
        switch (selectedTab) {
            case 0: 
                return <LsAllBets users={users} />
            case 1: 
                return <LsMyBets />
            case 2: 
                return <LsTopWins />
        
            default:
                break;
        }
    }

    const customStyles = {
        content: {
            width: "65%",
            height: "75%",
            margin: "auto",
            padding: "30px 5px 5px",
            border: "0",
            // padding: "20px",
            zIndex: "300",
            background: "var(--popBlue)",
            overflow: "hidden"
        },
        overlay: {
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: "300",
        }
        
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
            {/* Header Starts */}
            <div className="left-sidebar-header">
                <div className="audio-container">
                    <div className="audio-container-text">
                        Audio
                    </div>
                    <div className="audio-container-switch">
                        <CustomSwitch checked={audio} handleCheckedChange={handleAudioChange} />
                    </div>
                </div>
                {/* OnClick should open info modal */}
                <div className="rules-button" onClick={() => setOpenModal(true)}>
                    <FontAwesomeIcon icon={faInfoCircle} size='1.2x' />
                </div>
            </div>
            {/* Header Ends */}

            <div className="gradient-container left-sidebar-container">
                {/* <p>Left Sidebar</p> */}
                <div className="leftsb__button__container">
                    <div className={`leftsb__button ${selectedTab === 0 ? "leftsb__button--active" : ""}`} onClick={() => setSelectedTab(0)}>All Bets</div>
                    <div className={`leftsb__button ${selectedTab === 1 ? "leftsb__button--active" : ""}`} onClick={() => setSelectedTab(1)}>MyBets</div>
                    <div className={`leftsb__button ${selectedTab === 2 ? "leftsb__button--active" : ""}`} onClick={() => setSelectedTab(2)}>Top Wins</div>
                </div>

                <div className="leftsb__content">
                    <div className="pt__header">
                        <div className="pt__title">User</div>
                        <div className="pt__title">Bet</div>
                        <div className="pt__title">Coeff.</div>
                        <div className="pt__title">Win</div>
                    </div>

                    {
                        handleTabChange(selectedTab)
                    }
                    
                </div>
            </div>

            <Modal isOpen={openModal} style={customStyles}>
                <div className="modal__content">
                    <div className="modal__grid">
                        <div className="how_to_play">
                            <div className="how_to_play__header">
                                <div className="header__title">How to Play</div>
                                <div className="header__subtitle">Quick Explanation: </div>
                            </div>
                                <div className="htp__grid">
                                    <div className="pt-1 pt-common">The player needs to place a bet and then wait till the cannon strikes</div>
                                    <div className="pt-2 pt-common">The player wins if he or she cashes out before the coefficient explodes</div>
                                    <div className="pt-3 pt-common">The player needs to click on "cash out" button before the coefficient explodes</div>
                                    <div className="pt-4 pt-common">The player loses if he or she hasn't cashed out before the coefficient explodes</div>
                                </div>
                        </div>
                        <div className="details">
                            <div className="details__header">
                                <div className="details__title">Details</div>
                            </div>
                                <div className="details-rules__grid">
                                    <div className="grid-left">
                                        <div className="pt-1 pt-common">Before the round starts the player needs to place his/her bet.</div>
                                        <div className="pt-2 pt-common">The player can use "auto bet" and "auto cash out" features.</div>
                                        <div className="pt-3 pt-common">Minimum bet amount is 500 Pts.</div>
                                        <div className="pt-4 pt-common">Maximum bet amount is 5,000 Pts.</div>
                                    </div>
                                    <div className="grid-right">
                                        <div className="pt-1 pt-common">Before the round starts the player needs to place his/her bet.</div>
                                        <div className="pt-2 pt-common">The player can use "auto bet" and "auto cash out" features.</div>
                                        <div className="pt-3 pt-common">Minimum bet amount is 500 Pts.</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <button className="close-btn" onClick={() => setOpenModal(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default LeftSidebar
