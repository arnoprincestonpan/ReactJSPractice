import React from 'react'

function Banner() {
  const style = {
    fontFamily: "'Dancing Script', cursive",
    fontStyle: "oblique",
    color: "#FBB917",
    textShadow: "5px 5px 5px yellow",
    fontSize: "42px"
  }

  const styleContainer = {
    backgroundColor: "#FFFF9F",
    border: "3px solid black",
    borderRadius: "10px"
  }
  return (
    <>
      <div>
        <h2 style={{textTransform: "uppercase"}}>Don't Starve Just Eat</h2>
      </div>
      <div style={styleContainer}>
        <h1 style={style}>Just Eating</h1>
        <p><i>Your source to your favorite local restaurants and food sources.</i></p>
      </div>
    </>
  )
}

export default Banner