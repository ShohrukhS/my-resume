import React from 'react';
import './Header.css';
import logo from './logo.jpg'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <a href="#about">
        <img src={logo} alt="Logo" />
      </a>
        <h1>My Portfolio</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="cta-button">Hire Me</button>
    </header>
  );
};

export default Header;
