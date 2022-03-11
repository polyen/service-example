import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Page1 from './pages/Page1';

function App({ user }) {
  return (
    <Routes>
      <Route path="example/dashboard" element={<Dashboard/>}/>
      <Route path="example/home" element={<Home/>}/>
      <Route path="example" element={<Home/>}/>
      <Route path="example/page-1" element={<Page1/>}/>
    </Routes>
  );
}

export default App;
