import React from 'react'

const LsAllBets = ({ users }) => {
    return (
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
        
        </div>
    )
}

export default LsAllBets
