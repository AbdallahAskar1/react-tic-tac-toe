
const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];
// eslint-disable-next-line react/prop-types
function GameBoard( {onSelectSquare,turns}) { 
let gameBoard = initialGameBoard;

  for(const turn of turns) {
    const {square,player} = turn;
    const {row,col}= square;
    gameBoard[row,col] = player
  }
  return (
    <ol id="game-board">
      {gameBoard.map((Row, indexRow) => (
        <li key={indexRow}>
          <ol >
            {Row.map((item, indexCol) => (
              <li key={indexCol}>
                <button onClick={()=>onSelectSquare(indexRow,indexCol)}>{item}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
