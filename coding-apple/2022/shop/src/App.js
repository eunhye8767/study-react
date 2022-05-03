import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

import { Link, Route, Routes } from 'react-router-dom';

import Main from './Main';
import Detail from './Detail';
import Cart from "./Cart";

import Data from './data';

function App() {
  let [ shoes, setShoes ] = useState(Data);
  const [inventory, setInventory] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">React-Bootstrap</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/detail">Detail</Link>
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

      <Routes>
        <Route path="/" element={
          <Main shoes={shoes} setShoes={setShoes} />
          } />
        <Route path="/detail/:id" element={
          <Detail shoes={shoes} inventory={inventory} setInventory={setInventory} />
          } />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}


export default App;
