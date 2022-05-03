import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert초기값 = true;

function reducer2( state = alert초기값, 액션) {
  if (액션.type === '닫기') {
    state = false;
    return state;
    //return !state;
  }
  return state;
}

let 초기값 = [
  { id : 6, name : '멋진신발', quan : 2 },
  { id : 7, name : '이쁜신발', quan : 7 },
  { id : 8, name : '웃긴신발', quan : 5 },
]

function reducer(state = 초기값, 액션) {
  if ( 액션.type === '항목추가') {
    let copy = [...state];
    let index = copy.findIndex( obj => obj.id === 액션.payload.id );
    
    if ( index >= 0 ) {
      copy[index].quan++;
    } else {
      copy.push(액션.payload);
    }
    
    return copy;
  } else  if ( 액션.type === '수량증가' ) {
    let copy = [...state];
    let index = copy.findIndex( obj => obj.id === 액션.payload );
    copy[index].quan++;
    return copy;
  } else if (액션.type === '수량감소') {
    let copy = [...state];
    let index = copy.findIndex( obj => obj.id === 액션.payload );
    // copy[0].quan--;
    if (copy[index].quan > 0) copy[index].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
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
