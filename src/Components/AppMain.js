import './App.css';
import React from 'react';


const AppMain = (props) => {

    const onClickButton = (ev) => {
      props.initFunction()
    }
  
    const onChandgeInputOne = (event) => {
      props.updateInputOneFunction(event.target.value)
    }
  
    const onChandgeInputTwo = (event) => {
      props.updateInputTwoFunction(event.target.value)
    }
    return (
      <div className="Block">
  
        <h2>Запишем числа в Store</h2>
  
        <label id="inputOne">Число 1:</label>
        <input className="Input" value={props.state.value1} onChange={(event) => onChandgeInputOne(event)}></input>
  
        <label id="inputTwo">Число 2:</label>
        <input className="Input" value={props.state.value2} onChange={(event) => onChandgeInputTwo(event)}></input>
  
        <button onClick={() => onClickButton()}>Сбросить store!</button>
  
      </div>
    );
  }

  export default AppMain;
  