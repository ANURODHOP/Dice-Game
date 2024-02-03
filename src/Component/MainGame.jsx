import React, { useState } from 'react'
import styled from 'styled-components';
import Score from './Score';
import Options from './Options'
import Body from './Body';
import Rules from './Rules';

const MainGame = () => {
    const [active,toggleactive] = useState(false);
    const [error,newError] = useState("");
    const [score, changeScore] = useState(0);
    const totalChoices = [1, 2, 3, 4, 5, 6];
    const [randomNum, setRandomNum] = useState(1);
    const [selectedNum, setSelectedNum] = useState("");

    function checkDice() {
        if(!selectedNum){
            newError("**You must first Choose a number**");
            return
        }
        newError("");
        const newRandomNum = Math.floor(Math.random() * 6) + 1;

        // Use a callback function with setRandomNum to ensure the state is updated immediately
        setRandomNum(() => {
            return newRandomNum;
        });

        
        if(newRandomNum === selectedNum) {
            changeScore((prevScore)=>{
                return prevScore+10;
            })
        } else {
            changeScore((prevScore)=>{
                return prevScore-0.5;
            })
        }
    }



    return (
        <>
            <NAV>
                <Score score={score}/>
                <Options totalChoices={totalChoices}
                    error={error} 
                    newError={newError}
                    selectedNum={selectedNum}
                    setSelectedNum={setSelectedNum}
                />
            </NAV>

            <RollDice>

                <Body randomNum={randomNum}
                        checkDice={checkDice}
                        changeScore={changeScore}
                        toggleactive={toggleactive}
                        active={active}
                />

                <br />

                <Rules active={active}/>
                
            </RollDice>

        </>
    )
}

export default MainGame

const NAV = styled.nav`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    margin-top: 30px;

    div.score{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div.score h1{
        font-size: 4rem;
    }
    div.score p{
        font-size: 1.2rem;
        font-weight: bold;
    }

    div.btn-container{
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: end;
    }
    .oneOpacity{
        color: #ff2f00;
        font-weight: normal;
        opacity: 1;
    }
    .zeroOpacity{
        opacity: 0;
        color: white;
    }

    div.btn-container button{
        padding: 18px 20px;
        margin: 5px 9px;
        background-color: transparent;
        font-weight: bold;
        font-size: 1.15rem;
        cursor: pointer;
        transition: background-color 300ms;
        border-radius: 7px;
    }
    div.btn-container button:hover{
        background-color: #4c4a4a;
        color:white;
    }
    div.btn-container button:focus{
        background-color: black;
        color: white;
    }

    div.btn-container p{
        margin-top: 10px;
        font-weight: bold;
        font-size: 1.25rem;
    }
`

const RollDice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 
    
    img{
        width: 70%;
        cursor: pointer;
    }
    div.body{
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div.body h3{
        font-size: 1.25rem;
    }
    div.body > div{
        display: flex;
        flex-direction: column;
    }
    div.body > div > button{
        margin-top: 30px;
        padding: 10px 45px;
        border-radius: 7px;
        background-color: transparent;
        font-weight: bold;
        transition: 300ms;
        cursor: pointer;
    }
    div.body > div > button:hover{
        background-color: #4c4a4a;
        color:white;
    }
    div.body > div > button:active{
        background-color: black;
        color: white;
    }

    .nodisplay{
        display: none;
    }

    div.Rules{
        width: 600px;
        margin-top: 20px;
        margin-bottom: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        background-color: #ffe4e8;
        border-radius: 7px;
        gap: 5px;
        line-height: 20px;
    }
    div.Rules h2{
        font-size: 1.5rem;
    }
    div.Rules span{
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.05rem;
    }
`
