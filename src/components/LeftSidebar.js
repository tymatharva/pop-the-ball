import React, { useState } from 'react'

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
                <div className="rules-button">
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
        </div>
    )
}

export default LeftSidebar
