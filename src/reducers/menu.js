import * as TYPE from '../constants/ActionType';
import axios from 'axios';

const menuDefaultValue = [];
/*eslint-disable */
export const menuHeader = (state = menuDefaultValue, action) => {
  switch (action.type) {
    case TYPE.FETCH_MENU: {
      state = action.data;
      return [...state]
    }
    default: {
      return state
    }
  }
};

export const fetchMenu = () => dispatch => {
  axios.get('/menus')
    .then(res => {
      dispatch({
        type: TYPE.FETCH_MENU,
        data: res.data
      })
    })
}