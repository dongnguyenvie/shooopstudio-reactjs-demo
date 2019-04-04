import React from 'react';
import Outstading from './Outstanding';
import ProductWrapOne from './ProductWrapOne';

const HomePage = () => {
  return(
    <div className="w-100 pt-3 pt-md-5 pt-sm-4">
      <Outstading/>
      <div className="text-center mt-2">
        <h1> NEW ARIVALS</h1>
        <span>GET YOUR GROOVE ON</span>
      </div>
      <div className="w-100 d-flex justify-content-center pt-5">
        <ProductWrapOne/>
      </div>
    </div>
  );
};

export default HomePage;