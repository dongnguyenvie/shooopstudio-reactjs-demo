import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import PropTypes from 'prop-types';
import HeaderBottom from './header/HeaderBottom';
import SliderHeader from './slider/SliderHeader';

const Layout = props => {
  console.log(props);
  return (
    <div>
      <div className="container">
        <Header/>
      </div>
      <div className="w-100 menu-header-container">
        <HeaderBottom/>
      </div>
      <div className="w-100">
        <SliderHeader/>
      </div>
      <div className="w-100">
        {props.children}                
      </div>
      <div className="w-100 mt-4">
        <Footer/>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;