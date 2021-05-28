import {useState} from "react";
import DSix from './DSix';
import './DiceGame.css';

function DiceGame(props) {
    let [diceValue, setDiceValue] = useState("six");
    let [DiceValueTwo, setDiceValueTwo] = useState("six")
    let [DiceValueThree, setDiceValueThree] = useState("six")
    let [DiceValueFour, setDiceValueFour] = useState("six")
    let [DiceValueFive, setDiceValueFive] = useState("six")
    let [roleTotal, setRoleTotal] = useState(0);
    
    const rollDice = (num)=>{
      let rollResult = Math.floor(Math.random()*6)+1;
      let rollResultTwo = Math.floor(Math.random()*6)+1;
      let rollResultThree = Math.floor(Math.random()*6)+1;
      let rollResultFour = Math.floor(Math.random()*6)+1;
      let rollResultFive = Math.floor(Math.random()*6)+1;
      let sum = 0;
    
      if (num > 0){
      sum += rollResult; 
      if (num > 1){
        sum += rollResultTwo;
        if (num > 2){
          sum += rollResultThree;
          if (num > 3){
            sum += rollResultFour;
            if (num > 4){
              sum += rollResultFive;
            }
          }
        }
      }
    }
      setRoleTotal(sum);

      setDiceValue(rollResult);
      if (num > 1){
      setDiceValueTwo(rollResultTwo)
      }
      if(rollResult === 6){
       setDiceValue("six");
      }
      if(rollResult ===5){
        setDiceValue("five");
      }
      if(rollResult ===4){
        setDiceValue("four");
      }
      if(rollResult === 3){
        setDiceValue("three");
      }
      if(rollResult === 2){
        setDiceValue("two");
      }
      if(rollResult === 1){
        setDiceValue("one");
      }
      if (num > 1){

      if(rollResultTwo === 6){
        setDiceValueTwo("six");
       }
       if(rollResultTwo ===5){
         setDiceValueTwo("five");
       }
       if(rollResultTwo ===4){
         setDiceValueTwo("four");
       }
       if(rollResultTwo === 3){
         setDiceValueTwo("three");
       }
       if(rollResultTwo === 2){
         setDiceValueTwo("two");
       }
       if(rollResultTwo === 1){
         setDiceValueTwo("one");
       }
      }
      if (num > 2){

        if(rollResultThree === 6){
          setDiceValueThree("six");
         }
         if(rollResultThree ===5){
           setDiceValueThree("five");
         }
         if(rollResultThree ===4){
           setDiceValueThree("four");
         }
         if(rollResultThree === 3){
           setDiceValueThree("three");
         }
         if(rollResultThree === 2){
           setDiceValueThree("two");
         }
         if(rollResultThree === 1){
           setDiceValueThree("one");
         }
        }
        if (num > 3){

          if(rollResultFour === 6){
            setDiceValueFour("six");
           }
           if(rollResultFour ===5){
             setDiceValueFour("five");
           }
           if(rollResultFour ===4){
             setDiceValueFour("four");
           }
           if(rollResultFour=== 3){
             setDiceValueFour("three");
           }
           if(rollResultFour === 2){
             setDiceValueFour("two");
           }
           if(rollResultFour === 1){
             setDiceValueFour("one");
           }
          }
          if (num > 4){

            if(rollResultFive === 6){
              setDiceValueFive("six");
             }
             if(rollResultFive ===5){
               setDiceValueFive("five");
             }
             if(rollResultFive ===4){
               setDiceValueFive("four");
             }
             if(rollResultFive=== 3){
               setDiceValueFive("three");
             }
             if(rollResultFive === 2){
               setDiceValueFive("two");
             }
             if(rollResultFive === 1){
               setDiceValueFive("one");
             }
            }
    }
    return (
      <div className='dice-game'>
        <h1>Roll Total: {roleTotal} </h1>
        <div className='dice-game-dice'>
        {props.num > 0 && <DSix result={diceValue}/>}
        {props.num > 1 && <DSix result={DiceValueTwo}/>}
        {props.num > 2 && <DSix result={DiceValueThree}/>}
        {props.num > 3 && <DSix result={DiceValueFour}/>}
        {props.num > 4 && <DSix result={DiceValueFive}/>}
        </div>
        <button onClick={()=>rollDice(props.num)}>Roll Dice</button>
      </div>
    );
  }
  export default DiceGame;