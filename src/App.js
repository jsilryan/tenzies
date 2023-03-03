import React from "react"
import './App.css';
import Die from './Die';

function App() {
  let num = []
  function randomValue() {
    for (let i = 0; i < 10; i++){
      const randomNumber = Math.ceil(Math.random() * 6)
      num.push(randomNumber)
    }
    return num
  }
  const [diceVal, setDiceVal] = React.useState(randomValue())
  console.log(diceVal)
  
  const displayDice = diceVal.map((die) => {return (
    <Die value = {die}/>
  )})

  return (
    <main className="App">
      <div className ="Dice">
      {displayDice}
      </div>
    </main>
  );
}

export default App;
