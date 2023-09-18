import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Payment from "./pages/Payment/index";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
