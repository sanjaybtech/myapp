import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navigation';
import Footer from './Components/Footer';
import India from './Components/IndiaComp';
import Australia from './Components/AustraliaComp';
import England from './Components/EnglandComp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<India />} />
            <Route path="/australia" element={<Australia />} />
            <Route path="/england" element={<England />} />
          </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
