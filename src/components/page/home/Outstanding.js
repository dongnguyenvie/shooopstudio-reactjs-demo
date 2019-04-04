import React from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../reducers/outstading';
/*eslint-disable */
class Outstanding extends React.Component {
  componentWillMount () {
    this.props.fetchOutStading();
  }
  renderOutstading () {
    // console.log(this.props.outstadingData)
    const { outstadingData } = this.props
    return outstadingData.map((item, index) =>(
      <div className="col-md-4 col-sm-12 col-12 outstanding pt-1" key={index}>
        <div className="outstanding__container position-relative">
          <div className="outstanding__overlay">
            <div className="overlay__line position-absolute"></div>
            <div className="overlay__smooth-cover w-100 h-100 position-absolute"></div>
            <img src={item.images}
              className="w-100"></img>
            <div className="outstanding__context position-absolute d-flex flex-column text-center w-100">
              <span>{item.subTitle}</span>
              <b>{item.title}</b>
            </div>
          </div>
        </div>
      </div>
    ))
  }
  render () {
    return (
      <div className="container outstanding-wrap">
        <div className="row">
          {this.renderOutstading()}
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    outstadingData: state.outstading
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchOutStading: () => {
      dispatch(Action.fetchOutstading())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Outstanding);