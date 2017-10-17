import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import amp from './amp.jsx';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={amp}/>
    </Switch>
  </div>
);

export default App;
