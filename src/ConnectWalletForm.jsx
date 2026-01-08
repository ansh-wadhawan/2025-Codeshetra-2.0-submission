import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWalletForm() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "90vw",
        margin: "auto",
        padding: "20px",
        background: "#000",
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(255,255,255,0.1)",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#fff" }}>Connect MetaMask Wallet</h2>
      <button
        onClick={connectWallet}
        style={{
          background: "#fff",
          color: "#000",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        Connect Wallet
      </button>
      {walletAddress && (
        <p style={{ marginTop: "15px", fontWeight: "bold", color: "#fff" }}>
          Connected Wallet: {walletAddress}
        </p>
      )}
    </div>
  );
}
