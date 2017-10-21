import React from 'react';
import { Route, Switch } from 'react-router';
import uuid from 'uuid';
import { map } from 'lodash';
import tabs from '@/data/tabs.json';

const routes = map(tabs, (item) => (
  <Route exact path="/" key={item.id} component={require(item.path).default} />
));
console.log('routes', routes);

export default (
  <Switch>
    {routes}
    {/*<Route exact path="/" key={uuid()} component={tabs[0].path} />*/}
    <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
  </Switch>
);