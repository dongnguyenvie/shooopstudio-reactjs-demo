import * as TYPE from '../constants/ActionType';

const detailDefault = {
    title: ['await...'],
    content: ['awit...']
}
export const productDetail = (state = detailDefault, action) => {
  switch (action.type) {
      case TYPE.FETCH_PRODUCT_DETAIL: {
        console.log('sss', action.data)
        state = action.data
        return {...state};
      }
      default: return state;
  }
}

export const fetch_product = () => dispatch => {
    fetch('https://baconipsum.com/api/?type=all-meat&paras=7&start-with-lorem=4')
    .then(res => res.json())
    .then(res => {
        console.log(2222222, res)
        let data = {content: res}
        fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: TYPE.FETCH_PRODUCT_DETAIL,
                    data: {
                        ...data,
                        title: res
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: TYPE.FETCH_PRODUCT_DETAIL,
                    data: {
                        title: ['Browser do not support Function fetch()'],
                        content: ['Browser do not support Function fetch()']
                    }
                })
            })
    })
    .catch(err => {
        dispatch({
            type: TYPE.FETCH_PRODUCT_DETAIL,
            data: {
                title: ['Browser do not support Function fetch()'],
                content: ['Browser do not support Function fetch()']
            }
        })
    })
}