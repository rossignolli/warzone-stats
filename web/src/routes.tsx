import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global'

import Landing from './pages/landing/Landing';
// import OrphanagesMap from './pages/OrphanagesMap';
// import Orphanage from './pages/Orphanage';
// import CreateOrphanage from './pages/CreateOrphanage';



function Routes() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} /> */}
      </Switch>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  )
}

export default Routes;