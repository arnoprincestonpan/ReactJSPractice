import React from "react"
import BasicInformation from "../components/basicInformation"
import Reason from "../components/reason"
import AssignmentTable from "../components/assignmentTable"
import Layout from "../components/Layout"

function HomePage() {
  return (
    <div id="top" className="App">
      <header class="App-header">
        <h1>COMP 1850 with React.js | Student Information</h1>
        <p>This is a page where a student introduces himself.</p>
        <p><b>This is recreation of the original assignment #2 from COMP 1850, but done with React.js</b></p>
      </header>
      <body>
        <BasicInformation />
        <Reason />
        <AssignmentTable />
        <Layout />
        <h4>
          Page Navigation
        </h4>
        <ul>
            <li><a href="#top">Top of Page</a></li>
        </ul>
      </body>
    </div>
  )
}

export default HomePage