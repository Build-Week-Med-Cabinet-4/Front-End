import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


// Import welcome page, sign-up page and login page.
import WelcomePage from "./components/WelcomePage";
import Register from "./components/Register";
import Login from "./components/Login";

// Import user searched strains, saved strains, and profile.
import searchStrains from "./components/searchStrains";
import savedStrains from "./components/savedStrains";
import Profile from "./components/Profile";

// Import Styles for the Navigation bar.
import { NavContainerStyle } from "./components/RouterStyles/NavContainerStyle";
import { ListStyle } from "./components/RouterStyles/ListStyle";
import { ULStyle } from "./components/RouterStyles/ULStyle";
import { MedTitle } from "./components/RouterStyles/MedTitle";
import LinkStyle from "./components/RouterStyles/LinkStyle";
import "./components/RouterStyles/AppRouter.css";

// Old imports
// import AppRouter from "./components/AppRouter";
// import UserDash from './components/UserDash';
// import Profile from './components/Profile';
// import StrainSearch from './components/searchStrains';
// import SavedStrains from './components/savedStrains';


function App() {
  return (
        <div className="App">
          <Router>
          <NavContainerStyle>
          <ULStyle>
            <ListStyle>
              <LinkStyle to="/">Home</LinkStyle>
            </ListStyle>

            <ListStyle>
              <LinkStyle to="/register">Sign up</LinkStyle>
            </ListStyle>

            <ListStyle>
              <LinkStyle to="/login">Login</LinkStyle>
            </ListStyle>

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
            <Route exact path="/" component={WelcomePage} />

            <Route path="/login" component={Login} />
    
            <Route path="/register" component={Register} />

            {/* Private Routes*/}
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/searchstrains" component={searchStrains} />
            <PrivateRoute path="/savedstrains" component={savedStrains} />
          </Switch>
          </Router>
        </div>

  
  //  <Router>
  //    <Switch>
  //      <div>
  //      <UserDash />
  //      </div>
  //    <Route path="/strainSearch">
  //         <StrainSearch />
  //       </Route>
  //       <Route path="/savedStrains">
  //         <SavedStrains />
  //       </Route>
  //       <Route path="/profile">
  //         <Profile />
  //       </Route>
        
  //     </Switch>
  //     <div>
  //     <AppRouter />
  //   </div>
  //   </Router>
       
  
  );
}

export default App;
