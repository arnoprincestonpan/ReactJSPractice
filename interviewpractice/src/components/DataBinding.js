import React from 'react'
import {useState} from 'react'

function DataBinding() {

    const [value, setValue] = useState("")

  return (
    <>
        <div>
            <h1>Data Binding Exercise</h1>
            <p>The text field should be able to update the paragraph below.</p>
            <input type="text" placeholder="Enter Text" onChange={(e)=> setValue(e.target.value)}  />
            <p>{value}</p>
        </div>
    </>
  )
}

export default DataBinding