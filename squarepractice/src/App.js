import './App.css';
import Board from './components/Board';

function App() {

  const myBoardPosition = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    border: "1px solid black",
    padding: "5px"
  }

  return (
    <div className="App">
      <h1>I am here</h1>
      <div style={myBoardPosition}>
        <Board  />
      </div>
    </div>
  );
}

export default App;
