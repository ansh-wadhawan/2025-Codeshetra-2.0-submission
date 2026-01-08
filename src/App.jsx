import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Explainer from "./Explainer.jsx";
import Issuing from "./Issuing.jsx";
import IssueForm from "./IssueForm.jsx";
import PolicyCancellation from "./PolicyCancellation.jsx";
import CancelForm from "./CancelForm.jsx";
import ClaimSubmission from "./ClaimSubmission.jsx";
import ClaimSubmissionForm from "./ClaimSubmissionForm.jsx";
import ConnectWalletForm from "./ConnectWalletForm.jsx";
import PremiumPayment from "./PremiumPayment.jsx";
import PremiumPaymentForm from "./PremiumPaymentForm.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <section className="Explainer" id="Explainer">
        <Explainer />
        <ConnectWalletForm />
      </section>

      <hr style={{ border: "1px solid black" }} />

      <section className="PolicyIssuing" id="PolicyIssuing">
        <Issuing />
        <IssueForm />
      </section>

      <hr style={{ border: "1px solid #002BFF" }} />

      <section className="SubmissionSection" id="SubmissionSection">
        <ClaimSubmission />
        <ClaimSubmissionForm />
      </section>

      <hr style={{ border: "1px solid #00FFFF" }} />

      <section className="PremiumSection" id="PremiumSection">
        <PremiumPayment />
        <PremiumPaymentForm />
      </section>

      <hr style={{ border: "1px solid #FF1919" }} />

      <section className="PolicyCancellation" id="PolicyCancellation">
        <PolicyCancellation />
        <CancelForm />
      </section>

      <hr style={{ border: "1px solid #FFDD00" }} />

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
