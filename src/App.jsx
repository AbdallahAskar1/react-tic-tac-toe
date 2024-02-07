import Player from "./components/Player"

function App() {
  

  return (
    <>
   <div id="game-container">
    <ol id="players">

    <Player name="palyer1" symbol='X'></Player>
    <Player name="palyer2" symbol='O'></Player>
    </ol>
    GAME BOARD 
   </div>
   LOG
    </>
  )
}

export default App
