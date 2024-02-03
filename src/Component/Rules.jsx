import React from 'react'

const Rules = ({active}) => {
    return (
        <div className={!active ? 'nodisplay' : 'Rules'}>
            <h2>How to play Dice Game</h2>
            <span>Select Any number</span>
            <span>Click on Dice image</span>
            <span>After clicking on Dice of selected number is equal to the
                Dice number then 10 points will be added or else 0.5 point is deducted.
            </span>
        </div>
    )
}

export default Rules
