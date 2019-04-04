import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import test1 from './components/test/test1';
import Routes from './routes';
// import test from './components/layout/menu/MenuHeader';
class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/testa" component={test1} />
            <Route path={'/'} component={Routes} />

          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;