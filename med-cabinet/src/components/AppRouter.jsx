// Router setup for the page.
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import welcome page, sign-up page and login page.
import WelcomePage from "./WelcomePage";
import Register from "./Register";
import Login from "./Login";

// Import Styles for the Navigation bar.
import { NavContainerStyle } from "./RouterStyles/NavContainerStyle";
import { ListStyle } from "./RouterStyles/ListStyle";
import { ULStyle } from "./RouterStyles/ULStyle";
import LinkStyle from "./RouterStyles/LinkStyle";

// Setup function for router to the app.
function AppRouter() {
  return (
    <Router>
      <div>
        <NavContainerStyle className="main-nav">
          <ULStyle>
            <ListStyle>
              <LinkStyle to="/">Home</LinkStyle>
            </ListStyle>

            <ListStyle>
              <LinkStyle to="/register">Sign Up</LinkStyle>
            </ListStyle>

            <ListStyle>
              <LinkStyle to="/login">Log in</LinkStyle>
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
