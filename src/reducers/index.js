import { combineReducers } from 'redux';
import { menuHeader } from './menu';
import { sliders } from './slider';
import { outstading } from './outstading';
import { product } from './product';
import { productDetail } from './detailsProduct';

const rootReducers = combineReducers({
  menuHeader,
  sliders,
  outstading,
  product,
  productDetail
});

export default rootReducers;