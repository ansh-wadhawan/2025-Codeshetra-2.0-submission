import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./HeaderStyles.css";
import "./FooterStyles.css";
import "./issuingStyles.css";
import "./PolicyCancellationStyles.css";
import "./SubmissionStyles.css";
import "./PremiumPaymentStyles.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
