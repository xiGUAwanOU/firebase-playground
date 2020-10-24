import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Authentication } from './pages/Authentication';
import { CloudFirestore } from './pages/CloudFirestore';

function App() {
  return (
    <div className="app">
      <Router>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/authentication">Authentication</Link>
        <span> | </span>
        <Link to="/cloud-firestore">Cloud Firestore</Link>

        <hr />

        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/authentication"><Authentication /></Route>
          <Route path="/cloud-firestore"><CloudFirestore /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;