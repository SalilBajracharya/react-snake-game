import { useState } from "react";
import Cell from "./Cell";
import useDirection from "../hooks/useDirections";
import useSnake from "../hooks/useSnake";

function GameBoard() {
    const BOARD_ROWS = 15;
    const BOARD_COLUMNS = 15;
    const direction = useDirection();

    const centerRow = Math.floor(BOARD_ROWS / 2);
    const centerCol = Math.floor(BOARD_COLUMNS / 2);
  
    const [snake, setSnake] = useState([
      [centerRow, centerCol],
      [centerRow, centerCol - 1]
    ]);    
    const snakeState = useSnake(direction, BOARD_ROWS, BOARD_COLUMNS, snake);

    const cells = [];
    for(let row = 0; row < BOARD_ROWS; row++){
        for(let col = 0; col < BOARD_COLUMNS; col++){
            const isSnakeCell = snakeState.some(
                ([snakeRow, snakeCol]) => snakeRow === row && snakeCol === col
            );
            cells.push(<Cell key={`${row}-${col}`} isSnake={isSnakeCell} />);
        }
    }


    return (
        <div className="gameboard-grid"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${BOARD_COLUMNS}, 30px)`,
                gridTemplateRows: `repeat(${BOARD_ROWS}, 30px)`,
                border: "2px solid black",
                width: `${BOARD_COLUMNS * 30}px`,
                height: `${BOARD_ROWS * 30}px`
            }}
        >
            {cells}
        </div>
    )
}

export default GameBoard;