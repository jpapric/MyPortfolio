import React from 'react';
import './App.css';
import { ThemeContextProvider } from './context/ThemeContext';
import Work from './components/Work';
import Contact from './components/Contact';
import Home from './components/Home';
import Code from './components/Code';
import Design from './components/Design';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/work" element={<Work />} />
              <Route path="/code" element={<Code />} />
              <Route path="/design" element={<Design />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
