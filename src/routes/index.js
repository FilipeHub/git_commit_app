import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Commit from '../pages/Commit';

const Routes = () => (
  <Switch>
    <Route path="/repositories/:owner/:repository/commit/:commitSHA" exact component={Commit} />
  </Switch>
);

export default Routes;