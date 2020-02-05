import React from "react";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";

// Import Register and Login
import Register from "./Register";
import Login from "./Login";

// Import Styling for Welcome Page
import "./RouterStyles/WelcomePage.css";

const pStyle = {
  textDecoration: "none",
  color: "black",
  borderRadius: "5px",
  padding: "7px 18px",
  background: "#b6e1de",
  fontWeight: "bold"
};

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to Med Cabinet</h1>
      </header>
      <div>
        <p>Choose below to Sign up or Log in.</p>
        <p>
          <Link to="/register" style={pStyle}>
            Sign up
          </Link>
          <p>⇕</p>
          <Link to="/login" style={pStyle}>
            Log in
          </Link>
        </p>

        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </section>
  );
}
