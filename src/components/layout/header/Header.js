import React from 'react';
import logo from '../../../assets/images/logo/logo.png';
import imgCart from '../../../assets/images/shopping-bag.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="row w-100 header d-flex align-items-center overflow-hidden h-100 justify-content-between">
      <div className="col-sm-3 col-12">
        <div className="row">
          <div className="col-sm-12 pl-4 col-12">
            <Link to={{ pathname: "/" }}>
              <img src={logo} alt="Logo woo" className="default-menu-logo"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 justify-content-end">
        <div className="d-flex align-items-center">
          <div className="header-login col-7">
            <span>
                LOGIN
            </span>
            or
            <span>
                REGISTER
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center col-5">
            <span>
                £0.00
            </span>
            <img src={imgCart} className="header-cart-to-add" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
