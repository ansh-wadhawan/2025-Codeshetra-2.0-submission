import React, { useState, useEffect } from "react";

function PolicyCancellation() {
  return (
    <div className="cancellationDiv">
      <a href="#">
        <div className="cancellationTextContainer">
          <h2 id="cancellationMainHeading">
            Having seconds thoughts? no worries cancellation is easy
          </h2>
          Traditional insurance cancellations involve bureaucratic delays,
          manual processing, and potential disputes. Smart contracts automate
          the process, ensuring instant, transparent, and tamper-proof
          cancellations. <br />
          With a blockchain-based insurance system, users can cancel policies
          autonomously by triggering a smart contract function. Once a
          cancellation request is submitted, the contract verifies eligibility
          criteria, updates the policy status, and—if applicable—issues a refund
          without intermediaries. No need to trust us, it's the surity of steel
          and silicon, here are the terms of cancellation <br />
          1. On cancellation of policy, client is entitled to 30% of total
          premium paid without intrest <br />
          2. If policy expires, that is, client does not renew the policy, no
          refund on premium <br />
          3. if an event/incident, as per your policy, coverage amount will
          instantly be injected into seconday chain <br />
          4. A relaxtion time of 3 months is provided on premiums, failure to
          pay the premium for 3 months consecutively will result in the
          termnation of the policy and no refund will be provided see (2) <br />
          <b>(read full disclaimer below)</b>
        </div>
      </a>
    </div>
  );
}

export default PolicyCancellation;
