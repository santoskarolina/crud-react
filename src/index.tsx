import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { DispatchType, StateActionCustom, StateCustom } from 'contexts/types';
import reducer from 'contexts/reducer';
import thunk from "redux-thunk"

const store: Store<StateCustom, StateActionCustom> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <Provider store={store}>
      <App />
    </Provider>
     </BrowserRouter>
  </React.StrictMode>,
    document.getElementById("root")
);
