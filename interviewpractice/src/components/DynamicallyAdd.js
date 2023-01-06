import React from 'react'

function DynamicallyAdd() {
  return (
    <>
        <div>
            <h1>Dynmically Add Child Component</h1>
            <p>Show the entire Child Component inside the Parent Component. Only add code on Parent Component Below.</p>
            <ParentComponent>
                <ChildComponent />
            </ParentComponent>
        </div>
    </>
  )
}

function ParentComponent({children}){
    return(
        <>
            <div>
                <h2>Parent Component</h2>
                {children}
            </div>
        </>
    )
}

function ChildComponent(){
    return(
        <>
            <div>
                <h2>Child Component</h2>
                <p>Child Component is here.</p>
            </div>
        </>
    )
}

export default DynamicallyAdd