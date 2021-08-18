import React from 'react'

const RsHistory = ({ data }) => {
    return (
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
    )
}

export default RsHistory
