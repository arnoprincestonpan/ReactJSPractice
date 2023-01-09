import React from 'react'
import "../App.css"

function Aboutme() {
    return (
        <div className="Aboutme">
            <h1>About Me</h1>
            <h2>Arno Princeston Pan</h2>
            <p>I am a recent graduate of BCIT's Computer Systems Technology Diploma <i>(Dec 2022)</i>.
                I was formerly in the construction industry as a construction estimator. I decided to have a
                career change after taking some programming courses in mid 2020. While looking for a job in the
                construction industry, I took classes part time to learn more about programming. Eventually I entered
                full-time and finished my Diploma. And now I am here looking for a job in programming.
            </p>
            <h2>Languages Spoken</h2>
            <ul>
                <li>English (Proficient)</li>
                <li>Chinese - Mandarin (Spoken)</li>
                <li>Southern Min - Taiwanese Hokkien (Basic)</li>
            </ul>
        </div>
    )
}

export default Aboutme