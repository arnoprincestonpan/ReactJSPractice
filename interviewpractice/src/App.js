import './App.css';
import AddingNumbers from './components/AddingNumbers';
import CounterPlusMinus from './components/CounterPlusMinus';
import DataBinding from './components/DataBinding';
import DisableButton from './components/DisableButton';
import DisplayArray from './components/DisplayArray';
import DynamicallyAdd from './components/DynamicallyAdd';
import FetchUserData from './components/FetchUserData';
import ParentState from './components/ParentState';
import ToggleElement from './components/ToggleElement';

function App() {
  return (
    <div className="App">
      <DisplayArray />
      <DataBinding  />
      <ToggleElement  />
      <DisableButton  />
      <ParentState  />
      <DynamicallyAdd />
      <AddingNumbers  />
      <CounterPlusMinus />
      <FetchUserData  />
    </div>
  );
}

export default App;
