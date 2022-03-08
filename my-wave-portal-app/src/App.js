// import * as React from "react";
import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
// import logo from './logo.svg';
import './App.css';

const wave = () => {
    
}

// function App() {
const App = () => {
  /*
  * Just a state variable we use to store our user's public wallet.
  */
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = () => {
    try {
      /*
      * First make sure we have access to window.ethereum
      */
      const { ethereum } = window;

      // if (!ethereum) {
      //   console.log("Make sure you have metamask!");
      // } else {
      //   console.log("We have the ethereum object", ethereum);
      // }

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }

    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
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
        {/* <button className="waveButton" onClick={wave}> */}
        <button className="waveButton" onClick={null}>
          Wave at Me
        </button>

        {/*
        * If there is no currentAccount render this button
        */}
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
