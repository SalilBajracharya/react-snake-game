import { useEffect, useState } from "react";

function useDirection() {
    const [direction, setDirection] = useState("RIGHT");

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case "ArrowUp":
                    setDirection("UP");
                    break;

                case "ArrowDown":
                    setDirection("DOWN");
                    break;

                case "ArrowLeft":
                    setDirection("LEFT");
                    break;

                case "ArrowRight":
                    setDirection("RIGHT");
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return direction;
}

export default useDirection;