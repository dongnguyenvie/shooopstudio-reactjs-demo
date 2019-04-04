import { combineReducers } from 'redux';
import { menuHeader } from './menu';
import { sliders } from './slider';
import { outstading } from './outstading';
import { product } from './product'

const rootReducers = combineReducers({
  menuHeader,
  sliders,
  outstading,
  product
});

export default rootReducers;