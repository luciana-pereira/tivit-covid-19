import './App.css';
import NumberOfCases from './Components/NumberOfCases/index.js'
import  NumberOfDeath from './Components/NumberOfDeath/index.js'
import  NumberOfRecovered from './Components/NumberOfRecovered/index.js'
import CasesByCountry from './Components/CasesByCountry/index.js'

function App() {
  return (
    <div className="App"> 
    <NumberOfCases/>
    <NumberOfDeath/>
    <NumberOfRecovered/>
    <CasesByCountry/>
    </div>
  );
}

export default App;
