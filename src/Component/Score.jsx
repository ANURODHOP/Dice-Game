import React from 'react'

const Score = ({score}) => {
    return (
        <div className="score">
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
    )
}

export default Score
