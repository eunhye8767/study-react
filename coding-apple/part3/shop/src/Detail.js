import React, { useState, useEffect, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

import {재고context} from './App';

import {CSSTransition} from "react-transition-group";
import { connect } from 'react-redux';

let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color : ${ props => props.색상};
`;

function Detail(props) {

  let [alert, alert변경] = useState(true);
  let [inputdata, inputdata변경] = useState('');

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let [view, useview] = useState(false);
  let [viewNum, useviewNum] = useState([]);

  let 재고 = useContext(재고context);

  useEffect(()=>{
    let 타이머 = setTimeout( () => {
      alert변경(false)
    }, 2000);
    console.log('안녕');
    return ()=> { clearTimeout(타이머) }
  },[alert]);

  useEffect( ()=>{
    var arr = localStorage.getItem('watched');

    // arr 꺼냈는데 [] 이게 아니고 null이면 [] 하나 생성해주세요
    if ( arr == null ) { arr = [] } else { arr = JSON.parse(arr); }

    arr.push(id);
    arr = new Set(arr);  // set자료형
    arr = [...arr];      // set자료형으로 만든 {}소괄호를 제거해 id값만 적용한다.
    
    localStorage.setItem('watched', JSON.stringify(arr) );

    if (!view) useview(true);
    useviewNum(arr);
    console.log('zzzz');

  }, []);

  // 내코드
  // useEffect(()=>{

  //   let arr = [];
  //   let storageID = localStorage.getItem('id');
  //   let currArr = JSON.parse(storageID);
    
  //   if ( !storageID ) {
  //     arr.push(id);
  //     localStorage.setItem('id', JSON.stringify(arr));
  //   } else if ( !currArr.includes(id) ) {
  //     currArr.push(id);
  //     localStorage.setItem('id', JSON.stringify(currArr));
  //   } else if ( currArr.includes(id) ) {
  //     let filterArr = currArr.filter((el) => el !== id );
  //     filterArr.push(id);
  //     localStorage.setItem('id', JSON.stringify(filterArr));
  //   }

  // }, []);

  let { id } = useParams();
  let fid = props.shoes.find(function(goods){
    return goods.id == id;
  });

  let history = useHistory();

  function copy() {
    let index = id - 1;
    let copynew = [...재고];
    // copynew[index] = --copynew[index];
    copynew[index]--; 

    /*
      onClick={ copy } 이렇게 하거나 onClick={ ()=>{copy()} } 이렇게 해야합니다
      이 경우 copy 함수안에 return키워드는 필요없습니다
     */
    props.재고변경(copynew);
  }

  return (
    <div className="container">
      <박스>
        <제목 색상 = "blue" >Detail</제목>
      </박스>

      {inputdata}
      <input onChange={(e) => { inputdata변경(e.target.value) }} />

      {
        alert === true
        ? (
          <div className="my-alert">
            <p>재고가 얼마 남지 않았습니다</p>
          </div>
        )
        : null
      }
      
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+ (fid.id + 1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{fid.title}</h4>
          <p>{fid.content}</p>
          <p>{fid.price}원</p>

          <Info 재고 = { props.재고 } id = {fid.id} />

          <button className="btn btn-danger" onClick={ ()=>{ 
            copy();
            props.dispatch({type: '항목추가', payload: {id:fid.id, name: fid.title, quan: (props.재고[fid.id] -1)}});
            history.push('/cart')
          } }>주문하기</button>&nbsp;   
          <button className="btn btn-danger" onClick={ ()=>{ history.goBack() } }>뒤로가기</button> 
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={ () => { 스위치변경(false); 누른탭변경(0)} }>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={ () => { 스위치변경(false); 누른탭변경(1)} }>Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={ () => { 스위치변경(false); 누른탭변경(2)} }>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={500}>
      <TabContent 누른탭 = { 누른탭 } 스위치변경 = { 스위치변경 } />
      </CSSTransition>

      {
        view === true
        ? <View viewNum={viewNum} shoes={props.shoes}/>
        : null
      }

    </div>
  )
}

function View(props) {
  return (
    <div className="viewbox">
      {
        props.viewNum.map( (el) =>{
          return (
            <div className="item">
              <a href={'/detail/'+el}><img src={'https://codingapple1.github.io/shop/shoes'+ (++el) +'.jpg'} width="100%" /></a>
            </div>
          )
        })
      }
    </div>
  )
}

function Info(props) {
  return (
    <p>재고 : {props.재고[props.id ]} </p>
  )
}

function TabContent(props) {

  useEffect(()=>{
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다.</div>
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다.</div>
  } else if (props.누른탭 === 2) {
    return <div>2번째 내용입니다.</div>
  }
}

function state를props화(state) {
  return {
    state : state.reducer,
    alert열렸니 : state.reducer2
  }
}

export default connect(state를props화)(Detail)

// export default Detail;