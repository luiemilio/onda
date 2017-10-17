import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import waveDisplay from './waveDisplay.jsx';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={waveDisplay}/>
    </Switch>
  </div>
);

export default App;
