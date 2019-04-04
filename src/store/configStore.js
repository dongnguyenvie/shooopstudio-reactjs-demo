import reducers from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

export default createStore(reducers, applyMiddleware(ReduxThunk));