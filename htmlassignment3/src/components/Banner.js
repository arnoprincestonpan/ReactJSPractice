import React from 'react'
import toiletCatLaptop from "../images/toiletCatLaptop.png"

function Banner() {

    const myBannerContainer = {
        backgroundColor: "#D9BFB1",
        display: "flex",
        flexDirection: "row",
        border: "1px solid #5E5946",
        padding: "10px",
        margin: "5px"
    }

    const myImage = {
      borderRadius: "5px",
      padding: "5px",
      border: "1px solid #5E5946"
    }

    const myTitle = {
      margin: "5px",
      border: "none",
      textShadow: "2px 2px 5px white"
    }

  return (
    <>
        <div style={myBannerContainer}>
            <img style={myImage} src={toiletCatLaptop}    />
            <h1 style={myTitle}>Kitty Kat Information</h1>
        </div>
    </>
  )
}

export default Banner