import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { DdContextProvider } from "./hooks/books-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DdContextProvider>
      <Router basename="/MyReads-React">
        <App />
      </Router>
    </DdContextProvider>
  </StrictMode>
);
