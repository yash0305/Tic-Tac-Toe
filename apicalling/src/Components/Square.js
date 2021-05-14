import React from 'react'
import '../App.css'

function Square({ val, chooseSquare}) {
    return (
        <div className="square" onClick={chooseSquare}>
            {val}
        </div>
    )
}

export default Square;


// val = x or 0
// chooseSquare = function that will return  value