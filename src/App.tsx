import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Link to="/">Home</Link>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
