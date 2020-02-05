import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import StrainSearch from './components/searchStrains';
import SavedStrains from './components/savedStrains';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";

// Import App Router
import AppRouter from "./components/AppRouter";

function App() {
  return (
  
   <Router>
     <Switch>
       <PrivateRoute path='/home' component={Home}>
         <Home />
       </PrivateRoute>

       <Route path="/savedstrains">
          <savedStrains />
             </Route>
       <Route path='/strainsearch'>
             <searchStrains />
             </Route>
        
      </Switch>
      <div>
      <AppRouter />
    </div>
    </Router>
       
  
  );
}

export default App;
