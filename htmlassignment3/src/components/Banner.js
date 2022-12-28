import React from 'react'
import toiletCatLaptop from "../images/toiletCatLaptop.png"

function Banner() {

    const myBannerContainer = {
        backgroundColor: "#7F2A3C",
        display: "flex",
        flexDirection: "row",
        border: "3px solid #650000",
        padding: "10px"
    }

  return (
    <>
        <div style={myBannerContainer}>
            <img src={toiletCatLaptop}    />
            <h2>Kitty Kat Toilette</h2>
        </div>
    </>
  )
}

export default Banner