import logo from "./logo.svg";
import "./App.css";
import { Modal } from "./components/modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div id="container">
        <div id="title">React Custom Component</div>
        <div className="box">
          <div className="sub_title">Modal</div>
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default App;
