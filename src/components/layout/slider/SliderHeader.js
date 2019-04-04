import React from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../reducers/slider';
import Slider from "react-slick";

/*eslint-disable */
class SliderHeader extends React.Component {
  componentWillMount () {
    this.props.fetchSlider()
  }
  render () {
    const {sliderData} = this.props
    var carouselSettings = {
      speed: 500,
      autoPlay: false,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            infinite: true,
            slidesToScroll: 1,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 992,
          settings: 'unslick',
        }
      ]
    };
    return (
      <div className="slider-wrapper">
        <Slider {...carouselSettings}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <section>
                <img src={item.image} alt={item.user} />
                <span>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  // console.log(111, state.sliders)
  return {
    sliderData: state.sliders
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSlider: () => {
      dispatch(Action.fetchSlider())
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SliderHeader);