import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home/index';
import PaySuccess from './pages/Success';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pay/success" element={<PaySuccess />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
