import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Links to Sign up or Login
import Register from "./Register";
import Login from "./Login";

// Import Styling for Welcome Page
import "./RouterStyles/WelcomePage.css";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Hello World!</h1>
      </header>
    </section>
  );
}
