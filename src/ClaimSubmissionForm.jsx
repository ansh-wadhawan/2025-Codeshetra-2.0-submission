import { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0xYourContractAddress"; // Replace with actual deployed contract address
const abi = [
  {
    inputs: [{ internalType: "string", name: "policyId", type: "string" }],
    name: "submitClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default function ClaimSubmissionForm() {
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

      const tx = await contract.submitClaim(formData.policyId);
      setStatus("Transaction sent! Waiting for confirmation...");

      await tx.wait();
      setStatus("Claim submitted successfully!");
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
      <h2 style={{ color: "#000966", textAlign: "center" }}>Submit Claim</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <label style={{ color: "#000966", fontWeight: "bold" }}>
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
            border: "1px solid #00FFFF",
            borderRadius: "5px",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#00FFFF",
            color: "#000966",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Submit Claim
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
}
