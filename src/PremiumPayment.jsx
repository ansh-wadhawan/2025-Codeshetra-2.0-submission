import React, { useState, useEffect } from "react";

function PremiumPayment() {
  return (
    <div className="cancellationDiv">
      <a href="#">
        <div className="cancellationTextContainer">
          <h2 id="cancellationMainHeading">
            Having seconds thoughts? no worries cancellation is easy
          </h2>
          Traditional insurance premium payments often involve delays,
          processing fees, and trust in centralized entities. Smart contracts
          revolutionize this by automating payments, ensuring transparency, and
          eliminating third-party control. <br />
          With blockchain-based premium payments, users send ETH directly to the
          smart contract, which instantly verifies the transaction, updates
          policy status, and ensures continued coverage without human
          intervention. <br />
          No need to trust us, it's the surity of steel and silicon, here are
          the terms of payment <br />
          1. If policy expires, that is, client does not renew the policy, no
          refund on premium <br />
          2. 2% company fee on your premium paid <br />
          3. A relaxtion time of 3 months is provided on premiums, failure to
          pay the premium for 3 months consecutively will result in the
          termnation of the policy and no refund will be provided see (1) <br />
          <b>(read full disclaimer below)</b>
        </div>
      </a>
    </div>
  );
}

export default PremiumPayment;
