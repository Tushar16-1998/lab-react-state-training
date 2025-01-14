import { useState } from "react";

import dice0 from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function DiceRoller() {
  const [currentNumber, setCurrentNumber] = useState(0);

  const rollDice = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentNumber(newNumber);
  };

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const currentImage = currentNumber === 0 ? dice0 : diceImages[currentNumber - 1];

  return (
    <section>
      <img onClick={rollDice} src={currentImage} alt={`Dice ${currentNumber}`} />
    </section>
  );
}

export default DiceRoller;
