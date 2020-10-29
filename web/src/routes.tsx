import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global'

import Landing from './pages/landing/Landing';


function Routes() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  )
}

export default Routes;