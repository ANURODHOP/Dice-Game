import React from 'react'

const Body = ({randomNum,checkDice,changeScore,toggleactive,active}) => {
  return (
    <div className="body">
                    <img src={`images/dice_${randomNum}.png`} onClick={checkDice} />
                    <h3>Click On Dice to Roll</h3>
                    <div>
                        <button onClick={()=>{changeScore(0)}}>Reset Score</button>
                        <button onClick={()=>{
                            toggleactive((prev)=>
                                !prev)}}>
                                    {
                                        !active ? 'Show Rules' : 'Hide Rules'
                                    }
                                </button>
                    </div>
                </div>
  )
}

export default Body
