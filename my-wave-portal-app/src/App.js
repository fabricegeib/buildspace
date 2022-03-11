// import * as React from "react";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
// import logo from './logo.svg';
import './App.css';
import abi from "./utils/WavePortal.json";

// const wave = () => {
    
// }

// function App() {
// const App = () => {
//   /*
//   * Just a state variable we use to store our user's public wallet.
//   */
//   const [currentAccount, setCurrentAccount] = useState("");

//   const checkIfWalletIsConnected = () => {
//     try {
//       /*
//       * First make sure we have access to window.ethereum
//       */
//       const { ethereum } = window;

//       // if (!ethereum) {
//       //   console.log("Make sure you have metamask!");
//       // } else {
//       //   console.log("We have the ethereum object", ethereum);
//       // }

//       if (!ethereum) {
//         console.log("Make sure you have metamask!");
//         return;
//       } else {
//         console.log("We have the ethereum object", ethereum);
//       }

//       const accounts = await ethereum.request({ method: "eth_accounts" });

//       if (accounts.length !== 0) {
//         const account = accounts[0];
//         console.log("Found an authorized account:", account);
//         setCurrentAccount(account);
//       } else {
//         console.log("No authorized account found")
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   /**
//   * Implement your connectWallet method here
//   */
//   const connectWallet = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         alert("Get MetaMask!");
//         return;
//       }

//       const accounts = await ethereum.request({ method: "eth_requestAccounts" });

//       console.log("Connected", accounts[0]);
//       setCurrentAccount(accounts[0]);
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   /*
//   * This runs our function when the page loads.
//   */
//   useEffect(() => {
//     checkIfWalletIsConnected();
//   }, [])

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  /*
   * All state property to store all waves
   */
  const [allWaves, setAllWaves] = useState([]);

  /**
   * Create a variable here that holds the contract address after you deploy!
   */
  const contractAddress = "0x26993fa912d92c4E46ced03273ddD6e67FC0Eafc";
  
  /*
   * Create a method that gets all waves from your contract
   */
  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const waves = await wavePortalContract.getAllWaves();

        // Fix en attendant input text
        // const waveTxn = await wavePortalContract.wave("this is a message #SKIDIP");

        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        let wavesCleaned = [];
        waves.forEach(wave => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message
          });
        });

        /*
         * Store our data in React State
         */
        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  /**
   * Create a variable here that references the abi content!
   */
  const contractABI = abi.abi;

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamaskX!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        getAllWaves()
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

  // Call of getTotalWaves from WavePortal.sol (contract)

  const wave = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        /*
        * You're using contractABI here
        */
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        // Read the actual wave count
        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        /*
        * Execute the actual wave from your smart contract
        */
        const waveTxn = await wavePortalContract.wave();
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        // Return the new wave count 
        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        <p></p>
        <form>
          <label>
            Message :
          </label>
          <input type="text" name="message" />
          {/* <textarea value={textarea} /> */}
          <button className="waveButton" onClick={wave}>
            Wave at Me 
          </button>
        </form>

        {/*
        * If there is no currentAccount render this button
        */}
        {!currentAccount && (
          // onClick={connectWallet}
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        {/* Afficher les waves */}
        <div className="messages">
        {allWaves.map((wave, index) => {
          return (
            <div key={index} className="message">
              <div>Address: {wave.address}</div>
              <div>Time: {wave.timestamp.toString()}</div>
              <div>Message: <span style={{ color : "#c5ae6a"}}>{wave.message}</span></div>
            </div>)
        })}
        </div>
      </main>
    </div>
  );
}

export default App;

// --

// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [currentAccount, setCurrentAccount] = useState("");

//   const checkIfWalletIsConnected = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         console.log("Make sure you have metamask!");
//         return;
//       } else {
//         console.log("We have the ethereum object", ethereum);
//       }

//       const accounts = await ethereum.request({ method: "eth_accounts" });

//       if (accounts.length !== 0) {
//         const account = accounts[0];
//         console.log("Found an authorized account:", account);
//         setCurrentAccount(account);
//       } else {
//         console.log("No authorized account found")
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   /**
//   * Implement your connectWallet method here
//   */
//   const connectWallet = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         alert("Get MetaMask!");
//         return;
//       }

//       const accounts = await ethereum.request({ method: "eth_requestAccounts" });

//       console.log("Connected", accounts[0]);
//       setCurrentAccount(accounts[0]);
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     checkIfWalletIsConnected();
//   }, [])

//   return (
//     <div className="mainContainer">
//       <div className="dataContainer">
//         <div className="header">
//         👋 Hey there!
//         </div>

//         <div className="bio">
//           I am farza and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!
//         </div>

//         <button className="waveButton" onClick={null}>
//           Wave at Me
//         </button>

//         {/*
//         * If there is no currentAccount render this button
//         */}
//         {!currentAccount && (
//           <button className="waveButton" onClick={connectWallet}>
//             Connect Wallet
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App