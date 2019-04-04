/*eslint-disable */

const MockAdapter = require('axios-mock-adapter');
import menuData from './data/menu';
import slidersData from './data/slider';
import outstadingData from './data/outstading';
import product from './data/product';

export default (axios) => {

  const mock = new MockAdapter(axios);

  // Response menus 
  mock.onGet('/menus').reply(200, menuData);
  mock.onGet('/sliders').reply(200, slidersData);
  mock.onGet('/outstading').reply(200, outstadingData);
  mock.onGet('/product').reply(200, product)
};