import React, { useState, useEffect } from "react";

function Explainer() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const imgStyles1 = {
    width: "150px",
    height: "300px",
  };
  const imgStyles2 = {
    width: "150px",
    height: "300px",
    transform: "rotateY(180deg)",
  };

  const graphicStyles = {
    width: "300px",
    height: "300px",
    transformOrigin: "50% 50%",
    transform: "scale(1.8) translate(-20px,100px)",
    position: "fixed",
    right: "0px",
    zIndex: -1,
    opacity: (280 - (scroll / 750) * 225) / 280,
  };

  const CircleStyles = {
    borderRadius: "50%",
    borderRight: "5px black solid",
    borderTop: "5px black solid",
    borderBottom:
      "5px " + ((scroll / 750) * 225 < 210 ? "white" : "black") + " solid",
    borderLeft:
      "5px " + ((scroll / 750) * 225 < 150 ? "white" : "black") + " solid",
    height: "300px",
    backgroundColor: "white",
    zIndex: -2,
    position: "fixed",
    transformOrigin: "50% 50%",
    transform:
      "scale(1.8) translate(-20px,100px) rotate(" +
      (45 + (scroll / 750) * 225).toString() +
      "deg)",
    right: "0px",
    width: "300px",
    opacity: (280 - (scroll / 750) * 225) / 280,
  };

  const HeadingCapsuleStyles = {
    borderTopLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    color: "black",
    boxSizing: "border-box",
    border: "10px black solid",
    backgroundColor: "#white",
    width: "60vw",
    height: "80px",
    display: "flex",
    alignItems: "center",
    left: "0px",
    padding: "20px",
    marginTop: "40px",
    margin: "10px",
  };

  const TextContainerStyles = {
    borderTopLeftRadius: "20%",
    borderBottomRightRadius: "20%",
    color: "black",
    backgroundColor: "white",
    width: "60vw",
    left: "0px",
    padding: "5%",
    border: "black 5px solid",
    boxShadow: "10px 10px 20px 10px #000000A0",
    margin: "40px",
  };

  return (
    <div style={{ width: "100%" }} className={"section-container"}>
      <div className="section-graphic" style={graphicStyles}>
        <img style={imgStyles2} src="/eth.png" alt="graphic" />
        <img style={imgStyles1} src="/split-logo.png" alt="graphic" />
      </div>
      <div style={CircleStyles}></div>
      <div style={HeadingCapsuleStyles}>
        <h2 style={{ fontSize: "2em" }}> What is AuthInsurance? </h2>
      </div>

      <div style={TextContainerStyles}>
        <b>Decentralized Insurance System for ETH Price Protection</b>
        <br />
        This project is a blockchain-based insurance system designed to protect
        users against Ethereum (ETH) value crashes by issuing insurance payouts
        in tokens. The goal is to provide coverage using a smart contract-based
        policy system that monitors ETH prices and compensates users on a
        secondary blockchain when a crash occurs.
        <br />
        <b>How It Works </b>
        <br />
        Users purchase insurance policies by paying ETH premiums. <br />
        The smart contract tracks ETH price fluctuations and determines if a
        significant drop has occurred.
        <br /> If ETH crashes, the system arranges compensation using tokens on
        another blockchain. <br />
        Users can submit claims, which are verified and approved via an
        automated contract process.
        <br /> Payouts are distributed through an event-driven mechanism.
        <br /> <b>Smart Contracts & Components</b> <br /> <b>Insurance.sol</b>
        : Handles policy creation and premium payments.
        <br />
        <b>ClaimVerification.sol</b> : Ensures valid claims before payout.
        <br />
        <b>PayoutManager.sol</b> : Manages fund distribution.
        <br />
        <b>EventListner.sol</b> : Detects price events and approves claims.
        <br />
        <b>ReactiveContractConnector.sol </b> : (Future) Facilitates cross-chain
        payouts.
        <br /> <b>Frontend Implementation </b> <br /> Built with React.js and
        Ethers.js, the UI allows users to buy policies, make payments, and
        submit claims via MetaMask. Key components like Issuing.jsx display
        policy options, while Explainer.jsx educates users about the system.
        <br />
        <b> Current Limitations & Future Work </b> <br /> While the system
        successfully tracks ETH price drops and issues payouts, cross-chain
        transfers are not yet implemented due to time constraints. Future
        improvements include multi-chain support (Polygon, Arbitrum) and
        real-time ETH price tracking. <br /> This project provides a
        decentralized safety net for ETH holders, leveraging smart contracts and
        blockchain automation to ensure financial security in volatile markets.
      </div>
    </div>
  );
}

export default Explainer;
