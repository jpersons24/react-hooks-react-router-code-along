import React from "react";
import ReactDOM from "react-dom";
// Step 1: import react-router functions
import { BrowserRouter as Router } from "react-router-dom"
import App from "./components/App"



// Step 2: changed to have router coordinate what is displayed
ReactDOM.render(
  // Router Component is base for app's routing -> where we declare how React Router will be used
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
