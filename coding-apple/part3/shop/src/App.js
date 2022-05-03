import React, { useContext, useState, lazy, Suspense } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import Data from './data';

import { Link, Route, Switch, useHistory} from 'react-router-dom';


import Cart from './Cart';
import axios from 'axios';

// import Detail from './Detail';
// let Detail = lazy(()=>{ return import('./Detail.js') });
// 1줄로 작성할 경우, {} 와 return 생략 가능
let Detail = lazy( ()=> import('./Detail.js'));

export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
      <Route exact path="/">
        <div className="background">
          <h1>20% Season Off</h1>
        </div>
        <div className="container">

          <재고context.Provider value = {재고}>
          <div className="row">
            {
              shoes.map((value, index) => {
                return (
                  <Card shoes={shoes[index]} index={index} key={index} />
                )
              })
            }
          </div>
          </재고context.Provider>

          <button className="btn btn-primary" onClick={ ()=>{ 
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then( (result)=>{
              shoes변경([...shoes, ...result.data]);
              // console.log(newShoes);
              // console.log(result.data);
            })
            .catch( () => {
              console.log('실패했어요');
            });
          } }>더보기</button>
        </div>
      </Route>
      
      <Route path="/detail/:id">
        <재고context.Provider value = {재고}>
          <Suspense fallback={ <div>로딩중이에요</div> }>
            <Detail shoes={shoes} 재고={재고} 재고변경 = {재고변경} />
          </Suspense>
        </재고context.Provider>
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/:id">
        <div>아무거나 적었을 때 이거 보여주셈</div>
      </Route>

      </Switch>

    </div>
  );
}

function Card(props) {

  // let 재고 = useContext(재고context);
  let history = useHistory();

  return (
    <div className="col-md-4" onClick={ ()=>{ history.push('/detail/'+props.shoes.id)} }>
      <img src={ 'http://codingapple1.github.io/shop/shoes' + (props.index + 1)  + '.jpg' } width="100%" alt="" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}원</p>
      {/* {재고[props.index]} */}

      <Test num = {props.index} />
    </div>
  )
}

function Test(props) {
  let 재고 = useContext(재고context);
  return <p>{재고[props.num]}</p>
}

export default App;
