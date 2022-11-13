import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { initialState } from 'store/reducer';

const store = configureStore({
   reducer: reducer,
   preloadedState: initialState
});

const ConnectedApp = () => (
  <BrowserRouter>
  <Provider store={store}>
   <App />
 </Provider>
  </BrowserRouter>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));