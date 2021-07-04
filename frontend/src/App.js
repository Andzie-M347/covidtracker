import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Donate from './components/pages/donate/Layout';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>

        <Route path="/" >
          <Donate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
