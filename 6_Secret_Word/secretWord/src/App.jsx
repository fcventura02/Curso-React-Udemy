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
  const [words] = useState(wordsList);

  function startGame() {
    setGameStage(stages[1].name);
  }
  function voltarInicio() {
    setGameStage(stages[0].name);
  }
  return (
    <>
      {gameStage === "start" && (
        <StartScreen words={words} clickStart={startGame} />
      )}
      {gameStage === "game" && <Game clickSair={voltarInicio} />}
      {gameStage === "words" && <StartScreen />}
    </>
  );
}

export default App;
