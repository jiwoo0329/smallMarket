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
            <main className="min-h-[calc(100vh-65.89px)]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pay/success" element={<PaySuccess />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
