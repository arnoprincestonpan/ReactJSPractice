import React from 'react'
import {useState} from 'react'

function ToggleElement() {

    const [show, setShow] = useState(false)

  return (
    <>
        <div>
            <h1>Toggle Element</h1>
            <p>Make a button where when you click it, it should either hide the text below or display it below apon click.</p>
            <button onClick={() => setShow(!show)}>{show ? "Hide the Element Below" : "Show the Element Below"}</button>
            {show && <p>I am here!</p>}
        </div>
    </>
  )
}

export default ToggleElement