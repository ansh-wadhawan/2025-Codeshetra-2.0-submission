import React, { useState, useEffect } from "react";

function ClaimSubmission() {
  return (
    <div className="cancellationDiv">
      <a href="#">
        <div className="cancellationTextContainer">
          <h2 id="cancellationMainHeading">
            Having seconds thoughts? no worries cancellation is easy
          </h2>
          Traditional insurance claims are slow, complex, and prone to disputes,
          often requiring manual review and approval by centralized entities.
          Smart contracts streamline this process by automating claim
          verification, ensuring transparency, and eliminating human bias.
          <br />
          With blockchain-based claim submissions, users submit claims directly
          through a smart contract, which instantly verifies policy validity,
          payment history, and eligibility criteria. Approved claims trigger an
          automated payout process, reducing wait times and ensuring fair,
          rule-based decisions. <br />
          By leveraging trustless, self-executing contracts, this system makes
          claim submission faster, more secure, and completely transparent—a
          true breakthrough in decentralized insurance. no lawyers involved!{" "}
          <br />
          if an event/incident, as per your policy, coverage amount will
          instantly be injected into seconday chain <br />
          <b>(read full disclaimer below)</b>
        </div>
      </a>
    </div>
  );
}

export default ClaimSubmission;
