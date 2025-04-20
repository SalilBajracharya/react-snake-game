import { useEffect, useState } from "react"

const useSnake = (direction, boardRows, boardColumns, initialSnake) => {
    const [snake, setSnake] = useState(initialSnake);

    useEffect(() => {
        const interval = setInterval(() => {
            setSnake(prevSnake => {
                const head = prevSnake[0];
                let newHead;

                switch (direction) {
                    case "UP":
                        newHead = [head[0] - 1, head[1]];
                        break;

                    case "DOWN":
                        newHead = [head[0] + 1, head[1]];
                        break;

                    case "LEFT":
                        newHead = [head[0], head[1] - 1];
                        break;

                    case "RIGHT":
                    default:
                        newHead = [head[0], head[1] + 1];
                        break;
                }

                const newSnake = [newHead, ...prevSnake.slice(0, -1)];
                return newSnake;
            });
        }, 300);
        return () => clearInterval(interval);
    }, [direction])
    return snake;
}

export default useSnake;