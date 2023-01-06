import React from 'react'
import {useState} from 'react'

function DisableButton() {

    const [value, setValue] = useState("")

  return (
    <>
        <div>
            <h1>Disable Button</h1>
            <p>Disable the submit button when there is nothing entered inside the text field.</p>
            <input type="text" onChange={(e) => setValue(e.target.value)}  />
            <button disabled={value.length < 1}>Submit</button>
        </div>
    </>
  )
}

export default DisableButton