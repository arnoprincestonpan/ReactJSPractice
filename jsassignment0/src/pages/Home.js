import React from 'react'
import "../App.css"
import Purpose from "../images/pexels-magda-ehlers-purpose.jpg"

function Home() {
    return (
        <div className="Home">
            <h1>Home</h1>
            <h2>Purpose</h2>
            <figure>
                <img src={Purpose} alt="purpose photo on board"    />
                <figcaption>Purpose on a Fabric Board by Magda Ehlers (Pexels.com)</figcaption>
            </figure>
            <p>To practice and gain more exposure to the IT Industry in Vancouver, BC and elsewhere. Please feel free to
                navigate through this website. This is a recreation/reimagination of an old JavaScript assignment 0.
            </p>
        </div>
    )
}

export default Home