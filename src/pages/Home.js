import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <a href='/example/dashboard'>Dashboard</a>
    <br />
    <Link to='/page-1'>Page 1</Link>
  </div>
);

export default Home;