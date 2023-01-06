import React from 'react'
import {useState} from 'react'

function ParentState() {

    const [value, setValue] = useState("I need to be changed.")

  return (
    <>
        <div>
            <h1>Update Parent State</h1>
            <p>Parent text needs to be updated from the child.</p>
            <h2>Parent</h2>
            <p>{value}</p>
            <ChildState setValue={setValue} />
        </div>
    </>
  )
}

function ChildState({setValue}){
    return(
    <>
        <div>
            <h2>Child</h2>
            <button onClick={() => setValue("I changed the value")}>Change Parent Value</button>
        </div>
    </>
    )
}

export default ParentState