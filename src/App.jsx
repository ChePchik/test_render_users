import React from 'react'
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';

// npm i sass
// indexedDB.scss
export default function App() {
  return (
    <div className="container">
      <Router>
        <Menu/>
        <Routes />
      </Router>
    </div>
  );
}
// npm i react-router-dom