import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { map, filter } from 'lodash';
// import data from '@/data/tabs.json';
import { fetchData } from '@/data/fetchData';

// const tabs = data.tabs;

class Routes extends React.Component {
  state = {
    tabs: [],
  };

  componentWillMount() {
    console.log('will mount');
    fetchData().then((tabs) => {
      console.log('tabs', tabs);
      this.setState({
        tabs,
      })
    })
  }

  render() {
    return (
      <Switch>
        {map(this.state.tabs, tab => (
          <Route
            key={tab.id}
            exact
            path={tab.order === 0 ? '/' : `/${tab.id}`}
            component={require(`./${tab.path}`).default}
          />
        ))}
        {/*<Redirect from='/' exact to={`/${filter(this.state.tabs, ['order', 0])[0].id}`} />*/}
        {/*<Route render={() => <h1>PAGE NOT FOUND!</h1>} />*/}
      </Switch>
    )
  }
}

export default Routes;
