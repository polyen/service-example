import React from 'react';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="page-1" element={<Page1/>}/>
    </Routes>
  );
};

export default App;
