import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] =  useState(['남자 코트 추천','강남 우동 맛집','ABC']);
  let [따봉, 따봉변경] = useState([0,1,2]);
  let [누른제목, 누른제목변경] = useState(0);
  let [modal, modal변경] = useState(false);

  let [bmodal, bmodal변경] = useState(false);

  let [입력값, 입력값변경] = useState('');

  function num(i) {
    let newNum = [...따봉];
    newNum[i] = newNum[i] + 1;
    따봉변경(newNum);
  }

  function 글추가() {
    let newArr = [...글제목];
    newArr.unshift(입력값);
    글제목변경(newArr);
  }

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  function 순서바꾸기() {
    let arr = [...글제목];
    arr.sort();
    글제목변경(arr);
  }

  function bmodalheandler() {
    bmodal === true ? bmodal변경(false) : bmodal변경(true);
  }

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>제목</button>
      <button onClick={ 순서바꾸기 }>순서</button>

      {/* <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={ () => { modal변경(true) } }>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div> */}

      {
       글제목.map(function(a, i){
        return (
        <div className="list">
          <h3 onClick={ () => { 누른제목변경(i)} }>{ a } <span onClick={ ()=>{ num(i) } }>👍</span> { 따봉[i] }</h3>
          <p>2월 17일 발행</p>
          <hr />
        </div>
         )
       }) 
      }

      {/* <button onClick={ () => { 누른제목변경(0)} }>버튼 1</button>
      <button onClick={ () => { 누른제목변경(1)} }>버튼 2</button>
      <button onClick={ () => { 누른제목변경(2)} }>버튼 3</button> */}

      {
        modal === true
        ? <Modal></Modal>
        : null
      }

      {/* {입력값}
      <input onChange={ (e) =>{ 입력값변경(e.target.value) } } /> */}

      <div className="publish">
        <input onChange={ (e) => { 입력값변경(e.target.value) } } />
        <button onClick={ () => { 글추가() }}>저장</button>
      </div>

      <button onClick={ bmodalheandler }>버튼</button>

      {
        bmodal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
      
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
