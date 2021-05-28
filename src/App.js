import logo from './logo.svg';
import './App.css';
import DiceGame from './DiceGame';
import {useState} from 'react';
let counter = 0;

  

function App(props){

  let [diceNum, setDiceNum] = useState(1);
 const changeHandler = (event) => {
   setDiceNum(Number(event.target.value))
 }
 return (
    <div>
    <DiceGame num={diceNum}/>
    <label> Number of Dice
    <select type='number' max='5' min='0' defaultValue='1' onChange={changeHandler}>
      <option value='5'>Five</option>
      <option value='4'>Four</option>
      <option value='3'>Three</option>
      <option value='2'>Two</option>
      <option value='1'>One</option>
    </select>
    </label>
    </div>
  )
}

export default App;
