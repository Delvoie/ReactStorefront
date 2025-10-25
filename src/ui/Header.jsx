import React from 'react';
import Navbar from './Navbar';

function Header({ appTitle }) {
  return (
    <header className="header">
      <div className="container">
        <h2>{appTitle}</h2>
        <Navbar links={['Home', 'Products']} />
      </div>
    </header>
  );
}

export default Header;