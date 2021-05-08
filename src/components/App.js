import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetails';
import NotFound from '../components/NotFound';
import Navbar from '../components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/react_platzi" exact component={Landing} />
        <Route path="/react_platzi/badges" exact component={Badges} />
        <Route path="/react_platzi/badges/new" exact component={BadgeNew} />
        <Route
          path="/react_platzi/badges/:badgeId/edit"
          exact
          component={BadgeEdit}
        />
        <Route
          path="/react_platzi/badges/:badgeId"
          exact
          component={BadgeDetails}
        />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
