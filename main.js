const rows = prompt("How many rows");

//console.log(rows)
const Square = (props) => {
    return React.createElement('div', { style: { backgroundColor: props.backgroundColor, height: '20px', width: '20px', display:'inline-block', "marginBottom":"-5px" }})
}

const Row = (props) => {
    let arrayOfSquares = [];
    let color = props.startingColor
    for (let i = 0; i < rows; i++) {
        if (i % 2)
            arrayOfSquares.push(React.createElement(Square, { backgroundColor: color}))
        else
            arrayOfSquares.push(React.createElement(Square, { backgroundColor: color}))
        if (color === 'red') {
            color = 'black'
        }
        else {
            color  = 'red'
        }
    }
    return React.createElement('div', null, arrayOfSquares )
}

const CheckerBoard = (props) => {
    let arrayOfRows = [];
    for (let i = 0; i < rows; i++) {
        if (i % 2) {
            arrayOfRows.push(React.createElement(Row, { startingColor: "red"}))
        }
        else {
            arrayOfRows.push(React.createElement(Row, { startingColor: "black"}))
        }
    }
    return React.createElement('div', null, arrayOfRows )
}
    
ReactDOM.render(CheckerBoard(), document.getElementById("checkerboard"));
