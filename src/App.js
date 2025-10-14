import React from 'react';
import { ThemeContextProvider } from './context/ThemeContext';
import Work from './components/Work';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
