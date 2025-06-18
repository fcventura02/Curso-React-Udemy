import "./App.css";
import { useState } from "react";
import { words as wordsList } from "./data/words";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "words" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [totalScore, setTotalScore] = useState(0);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState();
  function startGame() {
    pickWord();
    setGameStage(stages[1].name);
  }
  function voltarInicio() {
    setGameStage(stages[0].name);
  }
  function pickWord() {
    const secretWord = words[Math.floor(Math.random() * words.length)];
    setPickedWord(secretWord);
  }
  function somaTotalScore(score) {
    setTotalScore((totalScore) => (totalScore += score));
  }
  return (
    <>
      {gameStage === "start" && (
        <StartScreen words={words} clickStart={startGame} score={totalScore} />
      )}
      {gameStage === "game" && (
        <Game
          clickSair={voltarInicio}
          secretWord={pickedWord}
          getSecretWord={pickWord}
          somaTotalScore={somaTotalScore}
        />
      )}
      {gameStage === "words" && <StartScreen />}
    </>
  );
}

export default App;
