import * as TYPE from '../constants/ActionType';
import axios from 'axios';

export const product = (state = [], action) => {
  switch (action.type) {
    case TYPE.FETCH_PRODUCT: {
      state = action.data
      return [...state]
    }
    default: return state
  }
}

export const fetch_data = () => despatch => {
  axios.get('/product')
    .then(res => {
      despatch({
        type: TYPE.FETCH_PRODUCT,
        data: res.data
      })
    })
}