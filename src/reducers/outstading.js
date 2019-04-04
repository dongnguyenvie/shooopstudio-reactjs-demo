import * as TYPE from '../constants/ActionType';
import axios from 'axios';

export const outstading = (state = [], action) => {
  switch (action.type) {
  case TYPE.FETCH_OUTSTADING: {
    // console.log(action)
    state = action.data;
    return [...state];
  }
  default: return state;
  }
};

export const fetchOutstading = () => dispatch => {
  axios.get('/outstading')
    .then(res => {
      dispatch({
        type: TYPE.FETCH_OUTSTADING,
        data: res.data
      });
    });
};