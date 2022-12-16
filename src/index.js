import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
// import { Provider } from 'react-redux';

// import store from './store/configureStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    {/* <Provider store={store}> */}
      <App/>
    {/* </Provider> */}
  </HashRouter>
);

reportWebVitals();
