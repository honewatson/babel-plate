/* eslint-disable no-unused-vars*/
import React from 'react';
/* eslint-enable no-unused-vars*/
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App, HomePage, About, Contact, Page404 } from 'containers/';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
      <Route path='*' component={Page404} />
    </Route>
  </Router>
);

export default Routes;
