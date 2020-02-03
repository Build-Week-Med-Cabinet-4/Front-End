// Router setup for the page.
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Import welcome page, sign-up page and login page.
import WelcomePage from "./WelcomePage";
import Signup from "./Signup";
import Login from "./Login";

// Setup function for router to the app.
function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/locations">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" component={WelcomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
