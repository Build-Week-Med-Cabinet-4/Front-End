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
import Linkstyle from "./RouterStyles/LinkStyle";

// Setup function for router to the app.
function AppRouter() {
  return (
    <Router>
      <div>
        <NavContainerStyle className="main-nav">
          <ULStyle>
            <ListStyle>
              <Linkstyle to="/">Home</Linkstyle>
            </ListStyle>

            <ListStyle>
              <Linkstyle to="/register">Sign Up</Linkstyle>
            </ListStyle>

            <ListStyle>
              <Linkstyle to="/login">Log in</Linkstyle>
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
