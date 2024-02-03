import React from 'react'
import styled from 'styled-components';

const OuterPg = ({handleBtn}) => {
  return (
    <Container>
      <div className="inner-container">
        <div className="img-container">
          <img src="/images/dices.png" />
        </div>
        <div className="btn-container">
          <h1>Dice Game</h1>
          <button onClick={()=>{handleBtn()}}>Play Now</button>
        </div>
      </div>
    </Container>
  )
}

export default OuterPg

const Container = styled.div`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: system-ui, 'Segoe UI';
    
    .inner-container{
      margin-top: 150px;
      width: auto;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
    .inner-container h1{
      font-size: 5rem;
    }
    .img-container{
      width: 500px;
      height: 500px;
    }
    .img-container img{
      width: 100%;
      height: 100%;
    }
    .btn-container{
      display: flex;
      flex-direction: column;
      justify-content: right;
      align-items: end;
    }
    .btn-container button{
      width: 30%;
      height: 35px;
      color: white;
      background-color: #281f1f;
      border-radius: 7px;
      transition: background-color 300ms;
      cursor: pointer;
    }
    .btn-container button:hover{
      background-color: black;
    }
    
`;
