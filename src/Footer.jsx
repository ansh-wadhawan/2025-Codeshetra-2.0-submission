function Footer() {
  const imgStyles = {
    width: "10%",
    height: "45%",
    border: "1px #FFDD00 solid",
    borderRadius: "50%",
    marginTop: "10px",
  };

  return (
    <div style={{ width: "100%" }} className={"footer-container"}>
      <img style={imgStyles} src="public/logo.png" alt="logo" />
      <div style={{ width: "50%" }} className="footer-div">
        <h2 width="80%">Disclaimer</h2> <br />
        <p>
          1. On cancellation of policy, client is entitled to 30% of total
          premium paid without intrest <br />
          2. If policy expires, that is, client does not renew the policy, no
          refund on premium <br />
          3. 2% company fee on your premium paid <br />
          4. if an event/incident, as per your policy, coverage amount will
          instantly be injected into seconday chain <br />
          5. A relaxtion time of 3 months is provided on premiums, failure to
          pay the premium for 3 months consecutively will result in the
          termnation of the policy and no refund will be provided see (2) <br />
        </p>
      </div>
      <div style={{ width: "15%" }} className="footer-div">
        <h2 width="80%">Important links</h2>
        <ul>
          <li>
            <a href="#Explainer">About</a>
          </li>

          <li>
            <a href="#PolicyIssuing">Issue a new policy</a>
          </li>

          <li>
            <a href="#SubmissionSection">Submitting a Claim</a>
          </li>

          <li>
            <a href="#PremiumSection"> Paying Premiums</a>
          </li>

          <li>
            <a href="#PolicyCancellation"> Cancel policy</a>
          </li>
        </ul>
      </div>
      <div style={{ width: "15%" }} className="footer-div">
        <h2 width="80%">Contact us</h2>
        <ul>
          <li>
            <a href="mailto:bt24cse018@iiitn.ac.in">bt24cse018@iiitn.ac.in</a>
          </li>

          <li>
            <a href="mailto:bt24cse068@iiitn.ac.in">bt24cse068@iiitn.ac.in</a>
          </li>

          <li>
            <a href="mailto:bt24cse158@iiitn.ac.in">bt24cse158@iiitn.ac.in</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
