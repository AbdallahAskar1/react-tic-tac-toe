const initalGameBoard= [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
function GameBoard() {
  return (
    <ol id="game-board">
         {initalGameBoard.map((row,indexRow)=>{
            <li key={indexRow}>
                {row.map((item,index)=>{
                    <li key={index}>
                        <button>{item}</button>
                    </li>
                })}
            </li>
         })}
    </ol>
  )
}

export default GameBoard