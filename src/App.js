import './App.css';
import Theatre from './components/Theatre/Theatre';
import Movies from './components/Movies/Movies';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <h1>
        Kult
        <span clasName="firstSpan">
          ur
        </span>
        <img height="50" src={logo}/>
        <span clasName="secondSpan">
        l
        </span>
      </h1>
      <Theatre/>
      {/* <Movies/> */}
    </div>
  );
}

export default App;
