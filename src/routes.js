import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from './components/layout/layout';
import test2 from './components/test/test2';
// import test3 from './components/test/test3';
import HomePage from './components/page/home/HomePage';

const Routes = ({ match }) => {
//   console.log(111,match);
  return (
    <Layout>
      <Switch>
        <Route path={`${match.url}test`} render={test2} ></Route>
        <Route exact path={match.url} render={HomePage}></Route>
      </Switch>
    </Layout>
  );
};

Routes.propTypes = {
  match: PropTypes.any
};

export default Routes;