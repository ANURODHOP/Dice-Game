import React from 'react'

const Options = ({totalChoices,error,newError, setSelectedNum}) => {
    return (
        <div className="btn-container">
            <h2 className="oneOpacity">{error}&nbsp;&nbsp;</h2>
            <div className="btns">
                {
                    totalChoices.map((element, i) => {
                        return <button key={i}
                            onClick={() => {
                                setSelectedNum(()=>element)
                                newError("")
                            }}
                        >{element}</button> 
                    })
                }
            </div>
            <p>Choose a number</p>
        </div>
       
    )
}

export default Options
