import React from 'react';
import SliderProduct from 'react-slick';
import { connect } from 'react-redux';
import * as Action from '../../../reducers/product';
import data from '../../../service/data/product';
import { Link } from 'react-router-dom';
class ProductWrapOne extends React.Component {
  componentWillMount () {
    this.props.fetchProduct()
  }
  renderProduct () {
    const {product} = this.props
    return data.map((item, index) => (
      <div key={index}>
        <div className="product-wrap-one__container mx-1 px-1 position-relative">
        <Link to={{ pathname: "/product", search: `?images=${item.images}` }}>
          <img src={item.images} 
            className="product-wrap-one__img"
            key={index}/>
          <div className="product-wrap-one__content d-flex flex-column  pl-4 py-3">
            <span className="text-body">{item.title}</span>
            <span className="product-wrap-one__price text-body">
            £{item.price}
            </span>
          </div>
        </Link>
        </div>
      </div>
    ))
  }
  render () {
    const productSetting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div className="product-wrap-one">
        { this.props.product && <SliderProduct {...productSetting}>
          {this.renderProduct()}
        </SliderProduct>}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProduct: () => dispatch(Action.fetch_data())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductWrapOne);