function Cell(props) {
    return (
        <div
            className="cells"
            key={`${props.row}-${props.col}`}
            style={{
                width: 30,
                height: 30,
                border: "1px solid gray",
                backgroundColor: props.isSnake ? "black" : "white"
            }}
        ></div>
    )
}

export default Cell;