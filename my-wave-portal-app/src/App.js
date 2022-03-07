import * as React from "react";
import { ethers } from "ethers";
import logo from './logo.svg';
import './App.css';

const wave = () => {
    
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>Bonjour 👋</p>
      </header>
      <main className="App-main">
        <div>
          I'm <a
              className="App-link"
              href="https://fabricegeib.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fabrice Geib
            </a>
        </div>
        <div>A french web developer</div>
        <div>Connect your Ethereum wallet and wave at me !</div>
        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </main>
    </div>
  );
}

export default App;
