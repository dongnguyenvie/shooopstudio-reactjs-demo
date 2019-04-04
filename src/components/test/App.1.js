import React, { Component } from 'react';
import './App.scss';
import tShirtCodersTokyo from './assets/images/tshirt.jpg';
import {connect} from 'react-redux'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bien1: 0
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tShirtCodersTokyo} className="App-logo" alt="logo" />
          <br/>
          <p>
            Cùng học với Coders.Tokyo nhé
          </p>
          <a
            className="App-link"
            href="https://coders.tokyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Đăng ký học
          </a>
        </header>
      </div>
    );
  }
}
// get. get theo action
// state 
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  // console.log(ownProps)
  return {

  }
}
// set -> gui action
const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(dispatch)
  // console.log(ownProps)
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)