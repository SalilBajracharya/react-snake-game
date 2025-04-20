import { useState } from "react";
import Cell from "./Cell";
import useDirection from "../hooks/useDirections";

function GameBoard() {
    const BOARD_ROWS = 15;
    const BOARD_COLUMNS = 15;

    const[snake, setSnake] = useState([[7,7], [7,6]]);        
    const direction = useDirection();
    console.log("Direction :", direction);
    const cells = [];


    for(let row = 0; row < BOARD_ROWS; row++){
        for(let col = 0; col < BOARD_COLUMNS; col++){
            const isSnakeCell = snake.some(
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