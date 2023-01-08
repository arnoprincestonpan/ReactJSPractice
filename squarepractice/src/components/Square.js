import React from 'react'
import {useState} from 'react'

function Square({newColor}) {

    const [color, setColor] = useState("lightgrey")

    let mySquareStyle = {
        display: "block",
        width: "50px",
        height: "50px",
        backgroundColor: color,
        border: "1px solid black",
        borderRadius: "3px",
        marginRight: "-1px",
        marginBottom: "-1px",
    }

    const colorArray = ["lightgrey", "red", "blue", "yellow", "purple", "orange", "green"]

    function randomColor(){
        const rndInt = Math.floor(Math.random() * (colorArray.length - 1))
        console.log(rndInt)
        setColor(colorArray[rndInt])
    }

  return (
    <>
        <center>
            <div style={mySquareStyle}>
            </div>
            <button onClick={() => randomColor()}>Change Color</button>
        </center>
    </>
  )
}

export default Square