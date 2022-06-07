import React from 'react';
import Header from "./components/Header";
import Items from "./components/Items";
import CreateItem from "./components/CreateItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/todo" element={<Items />} />
          <Route path="/done" element={<Items />} />
          <Route path="/create_item" element={<CreateItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
