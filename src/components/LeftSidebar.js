import React from 'react'
import "../App.scss"
import "../styles/LeftSidebar.scss"

const LeftSidebar = () => {
    return (
        <div className="left-sidebar container-border">
            <div className="gradient-container left-sidebar-container">
                {/* <p>Left Sidebar</p> */}
                <div className="leftsb__button__container">
                    <div className="leftsb__button leftsb__button--active">All Bets</div>
                    <div className="leftsb__button">My Bets</div>
                    <div className="leftsb__button">Top Wins</div>
                </div>

                <div className="leftsb__content"></div>
            </div>
        </div>
    )
}

export default LeftSidebar
