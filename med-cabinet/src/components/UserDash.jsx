import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

// Import user searched strains, saved strains, and profile.
import searchStrains from "./searchStrains";
import savedStrains from "./savedStrains";
import Profile from "./Profile";

// Import Styles for the Navigation bar.
import { NavContainerStyle } from "./RouterStyles/NavContainerStyle";
import { ListStyle } from "./RouterStyles/ListStyle";
import { ULStyle } from "./RouterStyles/ULStyle";
import { MedTitle } from "./RouterStyles/MedTitle";
import LinkStyle from "./RouterStyles/LinkStyle";
import "./RouterStyles/AppRouter.css";

// Setup function for router to the user dashboard.
function UserDash() {
  return (
    <Router>
      <div>
        <NavContainerStyle className="main-nav">
          <ULStyle>
            <ListStyle>
              <LinkStyle to="/searchstrains">Search Strains</LinkStyle>
            </ListStyle>

            <ListStyle>
              <LinkStyle to="/savedstrains">Saved Strains</LinkStyle>
            </ListStyle>

            <ListStyle>
              <LinkStyle to="/profile">Profile</LinkStyle>
            </ListStyle>
          </ULStyle>
        </NavContainerStyle>

        <Switch>
          <PrivateRoute path="/searchstrains" component={searchStrains} />
          <PrivateRoute path="/savedstrains" component={savedStrains} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default UserDash;