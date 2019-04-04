import React from 'react';
import MenuHeader from '../menu/MenuHeader.js';
// import iconMenu from '../../../assets/images/menu.svg';

const HeaderBottom = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <MenuHeader/>
        </div>
        <div className="header-search col-md-4 d-flex align-items-center justify-content-end pl-0">
          {/* <input type="text" className="form-control col-12 header-search_input"
            placeholder="Seach for product"/> */}
          {/* <span className="text-uppercase font-weight-bold">
            Categories
            <img src={iconMenu} className="header-search-menu"/>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;