import React, { useState, useEffect } from "react";

function Header() {
  document.title = "AuthInsurance";
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav>
      <div className={"nav-div " + (show ? "slidedown" : "slideup")}>
        <span>
          <a href="#Explainer">About</a>
        </span>
        <span style={{ backgroundColor: "white", color: "black" }}>
          <a style={{ color: "black" }} href="#PolicyIssuing">
            Issue a new policy
          </a>
        </span>
        <span style={{ backgroundColor: "#000966", color: "white" }}>
          <a href="#SubmissionSection">Submitting a Claim</a>
        </span>
        <span style={{ backgroundColor: "#FF1919", color: "white" }}>
          <a href="#PremiumSection"> Paying Premiums</a>
        </span>
        <span style={{ backgroundColor: "#FFEE00", color: "black" }}>
          <a href="#PolicyCancellation"> Cancel policy</a>
        </span>
      </div>
    </nav>
  );
}

export default Header;
