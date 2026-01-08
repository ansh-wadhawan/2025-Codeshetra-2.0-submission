import { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0xYourContractAddress";
const abi = [
  {
    inputs: [{ internalType: "bytes32", name: "_policyId", type: "bytes32" }],
    name: "createPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default function IssueForm() {
  const [formData, setFormData] = useState({
    name: "",
    walletAddress: "",
    coverageTime: "1yr",
    coverageAmount: "1ETH",
  });
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

      const policyId = ethers.utils.id(formData.walletAddress);
      const coverageAmountInWei = ethers.utils.parseEther(
        formData.coverageAmount.replace("ETH", "")
      );

      const tx = await contract.createPolicy(policyId, coverageAmountInWei);
      setStatus("Transaction sent! Waiting for confirmation...");

      await tx.wait();
      setStatus("Policy created successfully!");
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
      <h2 style={{ color: "#002BFF", textAlign: "center" }}>
        Crypto Coverage Form
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <label style={{ color: "#002BFF", fontWeight: "bold" }}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "8px",
            border: "1px solid #002BFF",
            borderRadius: "5px",
          }}
        />

        <label style={{ color: "#002BFF", fontWeight: "bold" }}>
          Crypto Wallet Address
        </label>
        <input
          type="text"
          name="walletAddress"
          value={formData.walletAddress}
          onChange={handleChange}
          required
          style={{
            padding: "8px",
            border: "1px solid #002BFF",
            borderRadius: "5px",
          }}
        />

        <label style={{ color: "#002BFF", fontWeight: "bold" }}>
          Coverage Time
        </label>
        <select
          name="coverageTime"
          value={formData.coverageTime}
          onChange={handleChange}
          required
          style={{
            padding: "8px",
            border: "1px solid #002BFF",
            borderRadius: "5px",
          }}
        >
          <option value="1yr">1 Year</option>
          <option value="5yrs">5 Years</option>
          <option value="10yrs">10 Years</option>
        </select>

        <label style={{ color: "#002BFF", fontWeight: "bold" }}>
          Coverage Amount (ETH)
        </label>
        <select
          name="coverageAmount"
          value={formData.coverageAmount}
          onChange={handleChange}
          required
          style={{
            padding: "8px",
            border: "1px solid #002BFF",
            borderRadius: "5px",
          }}
        >
          <option value="1ETH">1 ETH</option>
          <option value="5ETH">5 ETH</option>
          <option value="10ETH">10 ETH</option>
        </select>

        <button
          type="submit"
          style={{
            background: "#002BFF",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
}
