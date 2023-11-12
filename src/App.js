// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Problems from './components/Problems/Problems'
import AboutUs from './components/AboutUs/AboutUs';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h2>Welcome to the Home Page!</h2>;
};

export default App;
