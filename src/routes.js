import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import NotFoundContainer from './containers/not-found/not-found.container.js';
import AppContainer from './containers/app/app.container.js';
import MainContainer from './containers/main/main.container.js';
import AboutContainer from './containers/about/about.container.js';

export default (
  <span>
    <Route path="/" component={AppContainer}>
      <Route path="/main" component={MainContainer} />
      <Route path="/about" component={AboutContainer} />
      <IndexRedirect to="/main"/>
    </Route>
    <Route path="*" component={NotFoundContainer} />
  </span>
);
