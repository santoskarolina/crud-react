import React from 'react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createRoot } from 'react-dom/client'
import reducer, { initialState } from 'store/reducer';

const root = createRoot(document.getElementById("root") as HTMLElement);
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

root.render(<ConnectedApp />);