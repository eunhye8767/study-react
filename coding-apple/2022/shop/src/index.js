import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";

let defaultState = [ 
  { id : 0, name: '멋진신발', quan: 2 },
  { id : 1, name: '멋진신발2', quan: 4 }
];

function reducer(state=defaultState, action) {
  if( action.type === 'plus') {
    
    let copy = [...state];
    copy[action.index].quan++;
    return copy;

  } else if(action.type === 'minus') {
    let copy = [...state];
    if ( copy[action.index].quan > 0 ) copy[action.index].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
