import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

function App() {
  // const  App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello everyone, my name Duy Nghia !!</p>
        <a
          href="https://reactjs.org"
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
