import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Stats from './Component/Stats';
import Slide from './Component/Slide';
import Contact from './Component/Contact';
import About from './Component/About';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Donate from './Component/Donate';
function App() {
  return (
    <React.Fragment>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Slide/>}/>
      <Route path="/stats" element={<Stats/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    <Footer />
    </React.Fragment>
  );
}

export default App;
