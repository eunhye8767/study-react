import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

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

  useEffect(()=>{
    let 타이머 = setTimeout( () => {
      alert변경(false)
    }, 2000);
    console.log('안녕');
    return ()=> { clearTimeout(타이머) }
  },[alert]);

  let { id } = useParams();
  let fid = props.shoes.find(function(goods){
    return goods.id == id;
  });

  let history = useHistory();

  function copy() {
    let index = id - 1;
    let copynew = [...props.재고];
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
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{fid.title}</h4>
          <p>{fid.content}</p>
          <p>{fid.price}원</p>

          <Info 재고 = { props.재고 } id = {id} />

          <button className="btn btn-danger" onClick={ ()=>{ copy() } }>주문하기</button>&nbsp;   
          <button className="btn btn-danger" onClick={ ()=>{ history.goBack() } }>뒤로가기</button> 
        </div>
      </div>
    </div>
  )
}

function Info(props) {
  return (
    <p>재고 : {props.재고[props.id - 1]} </p>
  )
}

export default Detail;