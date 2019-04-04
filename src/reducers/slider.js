import * as TYPE from '../constants/ActionType';
import axios from 'axios';
/*eslint-disable */
export const sliders = (state = [], action) => {
  switch (action.type) {
    case TYPE.FETCH_SLIDER: {
      state = action.data;
      return [...state];
    }
    default: {
      return state
    }
  }
}

export const fetchSlider = () => dispatch => {
  axios.get('/sliders')
    .then(res => {
      console.log(res.data)
      dispatch({
        type: TYPE.FETCH_SLIDER,
        data: res.data
      })
    })
}