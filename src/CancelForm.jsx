import { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0xYourContractAddress"; // Replace with actual deployed contract address
const abi = [
  {
    inputs: [{ internalType: "string", name: "policyId", type: "string" }],
    name: "cancelPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default function CancelForm() {
  const [formData, setFormData] = useState({ policyId: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.ethereum) {
      setStatus("MetaMask not found!");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const tx = await contract.cancelPolicy(formData.policyId);
      setStatus("Transaction sent! Waiting for confirmation...");

      await tx.wait();
      setStatus("Policy cancelled successfully!");
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div
      style={{
        maxWidth: "90vw",
        margin: "auto",
        padding: "20px",
        background: "#fff",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#FFDD00", textAlign: "center" }}>Cancel Policy</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <label style={{ color: "#FFDD00", fontWeight: "bold" }}>
          Policy ID
        </label>
        <input
          type="text"
          name="policyId"
          value={formData.policyId}
          onChange={handleChange}
          required
          style={{
            padding: "8px",
            border: "1px solid #FFDD00",
            borderRadius: "5px",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#FFDD00",
            color: "#000",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Submit Cancellation
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
}
