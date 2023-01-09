import React from 'react'
import BCIT from "../images/bcit-burnaby.jpeg"

function Education() {
    return (
        <div className="Education">
            <h1>Education</h1>
            <h2>Post Secondary</h2>
            <h3>BC Institute of Technology</h3>
            <img src={BCIT} alt="bcit photo"    />
            <p>BCIT was first established as the British Columbia Vocational School in 1960.
                Eventually BCIT opened its Burnaby campus in 1964, with an initial enrollment of
                498 students. As of 2017, enrollment has grown to 18,755 Full-Time students and
                30,893 Part-Time students.
            </p>
            <h3>Profile</h3>
            <ul>
                <li>School of Business & Media</li>
                <li>School of Computing & Academic Studies</li>
                <li>School of Construction & the Environment</li>
                <li>School of Energy</li>
                <li>School of Health Sciences</li>
                <li>School of Transportation</li>
            </ul>
            <h3>Summary Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Campus</th>
                        <th>Enrollment Type</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Creditentials</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BC Institute of Technology (<i>BCIT</i>)</td>
                        <td>Burnaby, BC</td>
                        <td>Part-Time</td>
                        <td>May 2020</td>
                        <td>Dec 2021</td>
                        <td>Computer Systems Technology Certificate</td>
                    </tr>
                    <tr>
                        <td>BC Institute of Technology (<i>BCIT</i>)</td>
                        <td>Burnaby, BC</td>
                        <td>Full-Time</td>
                        <td>Jan 2022</td>
                        <td>Dec 2022</td>
                        <td>Computer Systems Technology Diploma</td>
                    </tr>
                    <tr>
                        <td>BC Institute of Technology (<i>BCIT</i>)</td>
                        <td>Burnaby, BC</td>
                        <td>Full-Time/Part-Time</td>
                        <td>Sep 2014</td>
                        <td>Jun 2016</td>
                        <td>Architectural Building Technology Diploma</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Education