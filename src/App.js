import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Screen/Home/Home";
import Cctv from "./Screen/Cctv/Cctv";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home/>}></Route>
              <Route exact path={"/cctv/:id"} element={<Cctv/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
