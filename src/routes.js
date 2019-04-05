import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from './components/layout/layout';
import test2 from './components/test/test2';
// import test3 from './components/test/test3';
import HomePage from './components/page/home/HomePage';
import product from './components/page/product/index'
import * as General from './components/test/General'


const Routes = ({ match }) => {
//   console.log(111,match);
  return (
    <Layout>
      <Switch>
        <Route path={`${match.url}test`} component={test2} ></Route>
        <Route path={`${match.url}product`} component={product} ></Route>
        <Route path={`${match.url}pages`} component={General.page}></Route>
        <Route path={`${match.url}shortcode`} component={General.shortCodes}></Route>
        <Route path={`${match.url}plugins`} component={General.plugins}></Route>
        <Route path={`${match.url}product-list`} component={General.productList}></Route>
        <Route path={`${match.url}on-sale`} component={General.onSale}></Route>
        <Route exact path={match.url} render={HomePage}></Route>
        <Route path={`${match.url}`} render={General.notFound} ></Route>
      </Switch>
    </Layout>
  );
};

Routes.propTypes = {
  match: PropTypes.any
};

export default Routes;