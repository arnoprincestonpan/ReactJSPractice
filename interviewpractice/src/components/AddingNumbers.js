import React from 'react'
import {useState} from 'react'

function AddingNumbers() {

    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [numberTotal, setNumberTotal] = useState(0)

    function addition(firstNumber, secondNumber){
        setNumberOne(firstNumber)
        setNumberTwo(secondNumber)
        setNumberTotal(numberOne + numberTwo)
    }

  return (
    <>
        <div>
            <h1>Adding Two Numbers</h1>
            <p>Have two text fields and to enter two numbers. And use a button to sum them up and display the result below.</p>
            <input onChange={(e) => setNumberOne(e.target.valueAsNumber)} type="number"  />
            <br />
            <input onChange={(e) => setNumberTwo(e.target.valueAsNumber)} type="number"  />
            <br />
            <button onClick={() => addition(numberOne, numberTwo)}>Sum</button>
            <p>Total: {numberTotal}</p>
        </div>
    </>
  )
}

export default AddingNumbers