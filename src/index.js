import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store/configStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import axiosConfig from './service/mock.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

axiosConfig(axios);

ReactDOM.render(
  <Provider
    store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));