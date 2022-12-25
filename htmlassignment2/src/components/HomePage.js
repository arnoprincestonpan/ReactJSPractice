import React from "react"
import BasicInformation from "./basicInformation"
import Reason from "./reason"
import AssignmentTable from "./assignmentTable"
import Layout from "./Layout"

function HomePage() {
  return (
    <div className="App">
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
      </body>
    </div>
  )
}

export default HomePage