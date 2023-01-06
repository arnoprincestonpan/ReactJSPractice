import React from 'react'
import {useState} from 'react'

function CounterPlusMinus() {

    const [value, setValue] = useState(0)

  return (
    <>
        <div>
            <h1>Counter Increment/Decrement</h1>
            <p>Display a counter that increments the number and decrements the number.</p>
            <h2>Counter: {value}</h2>
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setValue(value - 1)}>Decrement</button>
        </div>
    </>
  )
}

export default CounterPlusMinus