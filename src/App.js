import './App.css';
import Theatre from './components/Theatre/Theatre';
import Movies from './components/Movies/Movies';
import logo from './logo.png';
import { Router } from './Router';

function App() {
  return (
    <div className="App">
      <h1>
        Kult
        <span className="firstSpan">
          ur
        </span>
        <img height="50" src={logo}/>
        <span className="secondSpan">
        l
        </span>
      </h1>
      <Router/>
    </div>
  );
}

export default App;
