import React, { useState } from 'react'
import "../styles/common.scss"
import "../styles/RightSidebar.scss"

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
    return (
        <div className="right-sidebar container-border">
            <div className="gradient-container right-sidebar-container">
            <div className="rightsb__button__container">
                    <div className="rightsb__button rightsb__button--active">History</div>
                    <div className="rightsb__button">Highest</div>

                </div>

                <div className="rightsb__content">
                    <div className="pt__header">
                        <div className="pt__title">Time</div>
                        <div className="pt__title">Coeff.</div>
                        
                    </div>

                    <div className="pt__rows__container">
                        {
                            data.map(({time, coeff}) => {
                                return (
                                    <div className={`pt__row__item pt__row__item--active`}>
                                        <div className="pt__row__time">{time}</div>
                                        <div className="pt__row__coeff">{coeff === null ? "----" : coeff}</div>
                                    </div>
                                )
                            })
                        }
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
