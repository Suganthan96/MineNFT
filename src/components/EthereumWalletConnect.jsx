import { useState } from "react";
import { ethers } from "ethers";

export default function EthereumWalletConnect() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Install MetaMask.");
    }
  };

  return (
    <div className="wallet-box">
      <button onClick={connectWallet}>Connect Ethereum Wallet</button>
      {account && <p>Connected: {account}</p>}
    </div>
  );
}
