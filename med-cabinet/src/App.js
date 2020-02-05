import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch, PrivateRoute } from 'react-router-dom'

function App() {
  return (
   <Router>
     <Switch>
       <PrivateRoute path='/home'>
         <Home />
         </PrivateRoute>
             <Route path='/strainsearch'>
                <searchStrains />
             </Route>
      </Switch>
    </Router>
  );
}

export default App;
