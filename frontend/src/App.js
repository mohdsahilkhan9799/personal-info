import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import About from "./Components/about/about"


import MainUtiles from './util/mainUtiles';


const App = () => {
  return (
    <Router>
            <MainUtiles>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
   
       
      </Routes>
      </MainUtiles>
    </Router>
  );
};

export default App;
