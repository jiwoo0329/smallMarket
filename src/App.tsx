import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/home/Home';
import ProductList from './pages/product/ProductList';
import CreateProduct from './pages/product/CreateProduct';
import CartList from './pages/mypage/CartList';
import Order from './pages/pay/Order';
import PaySuccess from './pages/pay/PaySuccess';
import PayList from './pages/pay/PayList';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <main className="min-h-[calc(100vh-65.89px)]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/list" element={<ProductList />} />
                    <Route path="/product/create" element={<CreateProduct />} />
                    <Route path="/mypage/cart" element={<CartList />} />
                    <Route path="/pay/order" element={<Order />} />
                    <Route path="/pay/success" element={<PaySuccess />} />
                    <Route path="/pay/history" element={<PayList />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
