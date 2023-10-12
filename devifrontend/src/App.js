// src/App.js
import React from 'react';
import { BrowserRouter as  Router,Route,Routes } from 'react-router-dom';
import './styles/main.css';
import HomePage from './components/HomePage'; 
import Page404 from './components/Page404';
import Admin from './components/Admin';
import AdminHome from './components/AdminHome';
// import portfolioData from './components/PortfolioData';

const App = () => {
  return (
    <Router>
    <div>
    <Routes>
       
         
          <Route path="/" element={<HomePage/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/home" element={<AdminHome/>} />
          {/* <Route path="/port" element={<portfolioData/>} /> */}
              <Route path="*" element={<Page404/>} />
           
          </Routes>
    </div>
  </Router>
  );
};

export default App;
