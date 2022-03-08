// import * as React from "react";
import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
// import logo from './logo.svg';
import './App.css';

const wave = () => {
    
}

// function App() {
const App = () => {
  const checkIfWalletIsConnected = () => {
    /*
    * First make sure we have access to window.ethereum
    */
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
    } else {
      console.log("We have the ethereum object", ethereum);
    }
  }

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

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
