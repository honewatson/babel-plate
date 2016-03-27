/* eslint-disable no-unused-vars*/
import React from 'react';
/* eslint-enable no-unused-vars*/
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import HomePage from 'containers/HomePage/';
import About from 'containers/About/';
import Contact from 'containers/Contact/';
import Page404 from 'containers/Page404/';

import App from 'containers/App/';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="*" component={Page404} />
    </Route>
  </Router>
);

export default Routes;
