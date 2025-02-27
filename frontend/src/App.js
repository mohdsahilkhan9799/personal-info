import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import Education from "./Components/education/eduction"


import MainUtiles from './util/mainUtiles';


const App = () => {
  return (
    <Router>
            <MainUtiles>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<Education />} />
   
       
      </Routes>
      </MainUtiles>
    </Router>
  );
};

export default App;
