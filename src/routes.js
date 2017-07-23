import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home';
import Watch from './components/Watch';
import PageNotFound from './components/PageNotFound';

const Routes = (props) => (
<Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/watch" component={Watch} />
        <Route path="*" component={PageNotFound} />
    </Switch>
</Router>
);

export default Routes;