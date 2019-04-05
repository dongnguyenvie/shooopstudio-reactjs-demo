import React, {Component} from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Action from '../../../reducers/detailsProduct';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          params: queryString.parse(this.props.location.search),
        }
    }
    componentDidMount () {
        this.props.fetch_product()
    }

    render() {
        console.log(4444, this.props)
        const {images} = this.state.params
        return (
            <div className="container">
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <img src={images} className="img-thumbnail"/>
                    </div>
                    <div className="col-md-9">
                        <h1 className="h2">{this.props.detailProduct.title}</h1>
                        <div className="progress" style={{height: '5px'}}>
                            <div className="progress-bar" style={{
                                width:'80%',
                            }}></div>
                        </div>
                        <div className="content">
                            {this.props.detailProduct.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    detailProduct: state.productDetail
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetch_product: () => dispatch(Action.fetch_product())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);