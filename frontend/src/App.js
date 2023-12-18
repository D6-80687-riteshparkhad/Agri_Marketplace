import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Buyer from './Components/Buyer';
import Seller from './Components/Seller';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buy" element={<Buyer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sell" element={<Seller />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
