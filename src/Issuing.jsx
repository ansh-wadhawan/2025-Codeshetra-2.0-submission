import React, { useState, useEffect } from "react";

function Issuing() {
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

  return (
    <div className="issuingDiv">
      <h2 id="issuingMainHeading">
        Some of the policies you can issue Right Now
      </h2>
      <div className="issuingTextContainer">
        <h2 className="issuingHeading">1 year policy</h2>
        for a premium of X every month you'll
        <br /> receive coverage worth 1ETH for the whole year
      </div>

      <div className="issuingTextContainer">
        <h2 className="issuingHeading">5 year policy</h2>
        for a premium of X every month you'll
        <br /> receive coverage worth 10ETH for 5 whole years
      </div>

      <div className="issuingTextContainer">
        <h2 className="issuingHeading">10 year policy</h2>
        for a premium of X every month you'll
        <br /> receive coverage worth 10ETH for 10 whole years
      </div>
    </div>
  );
}

export default Issuing;
