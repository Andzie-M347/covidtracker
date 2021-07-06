import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Donate from './components/pages/donate/Layout';
import Header from './components/Header';
import Footer from './components/Footer';


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
      <Footer />
    </Router>
  );
}

export default App;
