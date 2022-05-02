import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

import "./App.css";

import Dice from "./Dice";

function App() {
  function allNewDice() {
    let times = 10;
    let arr = [];
    while (times > 0) {
      arr.push({
        value: Math.floor(Math.random() * (6 - 1 + 1) + 1),
        isHeld: false,
        id: nanoid(),
      });
      times--;
    }
    return arr;
  }
  function rollDices() {
    setDices((prevDices) => {
      const isAllHeld = prevDices.every((dice) => dice.isHeld);
      if (isAllHeld) {
        setTenzies(false);
        return allNewDice();
      }
      return prevDices.map((dice) => {
        return dice.isHeld ? dice : { ...dice, value: Math.floor(Math.random() * (6 - 1 + 1) + 1) };
      })
    });
  }

  function holdTheDice(id) {
    setDices((prevDices) =>
      prevDices.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  const [dices, setDices] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const diceValue = dices[0].value;
    const isAllHeld = dices.every(dice => dice.isHeld)
    const isSameValue = dices.every(dice => dice.value === diceValue)
    if (isAllHeld && isSameValue) setTenzies(true);
  }, [dices])

  const dicesComponents = dices.map((dice) => (
    <Dice
      key={dice.id}
      diceValue={dice.value}
      isHeld={dice.isHeld}
      holdTheDice={() => holdTheDice(dice.id)}
    />
  ));

  return (
    <div className="App display-flex">
      <main className="display-flex">
        <div className="caption">
          <h1 className="caption__title">Tenzies</h1>
          <p className="caption__paragraphe">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="dices-container">
          { tenzies ? <Confetti /> : null }
          {dicesComponents}
        </div>
        <button onClick={rollDices} className="roll-button display-flex">
          { tenzies ? 'New Game': 'Roll'}
        </button>
      </main>
    </div>
  );
}

export default App;
