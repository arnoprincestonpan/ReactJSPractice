import './App.css';
import AssignmentTable from './components/assignmentTable';
import BasicInformation from './components/basicInformation';
import Reason from './components/reason';

function App() {
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
      </body>
    </div>
  );


}

export default App;
