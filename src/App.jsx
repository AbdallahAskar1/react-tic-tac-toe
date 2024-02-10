import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react";
function App() {
  
  const [activePlayer,setActivePlayer]=useState("X");
  const [gameTurns,setGameTurns]=useState([])
  
  
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((prevp)=>{
      return prevp === "X"? "O" : "X";
    });
    setGameTurns((prev)=>{
      let currentPlayer = "X";
      if(prev.length>0 && prev[0].player === "X") {
        currentPlayer="O"
      }
      const updatedTurns = [
        {square:{row:rowIndex, col:colIndex},player:currentPlayer},
        ...prev,
      ]
      return updatedTurns
    })
    
  }
  return (
    <>
   <div id="game-container">
    <ol id="players">

    <Player name="palyer1" symbol='X' isActive={activePlayer === "X"}></Player>
    <Player name="palyer2" symbol='O' isActive={activePlayer === "O"}></Player>
    </ol>
    <GameBoard  onSelectSquare={handleSelectSquare} turns={gameTurns}/>
   </div>
   LOG
    </>
  )
}

export default App
