import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '열공하자']);
  let [count, setCount] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [curr, setCurr] = useState(null);
  
  let [value, setValue] = useState('');

  let posts = '강남 고기 맛집';

  let handlerTitleChange = () => {
    let copyTitle = [ ...title];
    let copyCount = [...count];
    
    copyTitle.unshift(value);
    copyCount.unshift(0);
    // copyTitle.sort(); 정렬
    setTitle(copyTitle);
    setCount(copyCount);
  }

  let handlerModal = (i) => {
    // console.log(curr, i);
    setCurr(i);
    if ( curr === null ) setModal(true);
    if ( curr === i && modal ) setModal(false);
    if ( curr === i && !modal ) setModal(true);
    if ( curr !== i && !modal ) setModal(true);
  }

  let handlerCount = (i) => {
    let copyCount = [...count];
    copyCount[i] = copyCount[i] + 1;
    setCount(copyCount);
  }

  function repeatUI() {
    var arr = [];
    for (var i=0; i<3; i++) {
      arr.push(<div>안녕</div>)
    }
    return arr;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        title.map( (tit, i) => {
          return (
            <div className="list" key={i}>
              <h3>
                <button onClick={ () => handlerModal(i) }>{ tit }</button>
                <button 
                  onClick={ () => { handlerCount(i) } }>
                    👍
                </button> { count[i] }
              </h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }
      
      <div>
        <input type="text" 
          onChange={ (e) => { setValue(e.target.value) } } />
        <button onClick={ handlerTitleChange }>저장</button>
      </div>

      <button onClick={ () => { setModal(!modal) } }>버튼</button>

      {
        modal
        ? <Modal title = {title} curr = {curr} />
        : null
      }
    </div>
  );
}

function Modal({title, curr}) {
  return (
    <div className='modal'>
      <h2>제목 : { title[curr] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
