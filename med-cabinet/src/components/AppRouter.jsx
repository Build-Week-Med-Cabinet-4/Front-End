// Router setup for the page.
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Import welcome page, sign-up page and login page.
import WelcomePage from "./WelcomePage";
import Register from "./Register";
import Login from "./Login";

// Import Styles for the Navigation bar.
import { NavContainerStyle } from "./RouterStyles/NavContainerStyle";
import { ListStyle } from "./RouterStyles/ListStyle";
import { ULStyle } from "./RouterStyles/ULStyle";

// Setup function for router to the app.
function AppRouter() {
  return (
    <Router>
      <div>
        <NavContainerStyle className="main-nav">
          <ULStyle>
            <ListStyle>
              <Link to="/">Home</Link>
            </ListStyle>

            <ListStyle>
              <Link to="/register">Sign Up</Link>
            </ListStyle>

            <ListStyle>
              <Link to="/login">Log in</Link>
            </ListStyle>
          </ULStyle>
        </NavContainerStyle>

        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
