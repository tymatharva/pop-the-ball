import React, { useState } from 'react'

// Styles
import "../styles/common.scss"
import "../styles/RightSidebar.scss"

// Components
import RsHighest from "./mini/RsHighest"
import RsHistory from "./mini/RsHistory"

const RightSidebar = () => {
    const [data, setData] = useState([
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
        {
            time: "09:46",
            coeff: "1.41x",
        },
    ])

    const [selectedTab, setSelectedTab] = useState(0);

    function handleTabChange(selectedTab){
        switch (selectedTab) {
            case 0: 
                return <RsHistory data={data}/>
            case 1: 
                return <RsHighest data={data}/>
        
            default:
                break;
        }
    }
    return (
        <div className="right-sidebar container-border">
            <div className="gradient-container right-sidebar-container">
            <div className="rightsb__button__container">
                    <div className={`rightsb__button ${selectedTab === 0 ? "rightsb__button--active" : ""}`} onClick={() => setSelectedTab(0)}>History</div>
                    <div className={`rightsb__button ${selectedTab === 1 ? "rightsb__button--active" : ""}`} onClick={() => setSelectedTab(1)}>Highest</div>

                </div>

                <div className="rightsb__content">
                    <div className="pt__header">
                        <div className="pt__title">Time</div>
                        <div className="pt__title">Coeff.</div>
                        
                    </div>

                    {
                        handleTabChange(selectedTab)
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
