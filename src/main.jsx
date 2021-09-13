import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import A4Portrait from './pages/A4Portrait';
import A4Landscape from './pages/A4Landscape';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/portrait">
          <A4Portrait />
        </Route>
        <Route path="/landscape">
          <A4Landscape />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
