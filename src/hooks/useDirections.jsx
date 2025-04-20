import { useEffect, useState } from "react";

function useDirection() {
    const [direction, setDirection] = useState("RIGHT");

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp") {
                setDirection("UP");
            } else if (e.key === "ArrowDown") {
                setDirection("DOWN");
            } else if (e.key === "ArrowLeft") {
                setDirection("LEFT");
            } else if (e.key === "ArrowRight") {
                setDirection("RIGHT");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return direction;
}

export default useDirection;