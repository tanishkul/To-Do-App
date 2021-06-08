import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';

import { TodoList } from './modules';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route component={TodoList} exact path="/" />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export { App };
