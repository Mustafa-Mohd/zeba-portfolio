import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <a href="#home" className="logo">
        <span className="logo-bracket">&lt;</span>Zeba<span className="logo-slash">/</span><span className="logo-bracket">&gt;</span>
      </a>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} color="#f0f0f6" /> : <Menu size={28} color="#f0f0f6" />}
      </div>

      <nav className={`navbar ${isOpen ? 'nav-toggle' : ''}`}>
        <ul>
          <li><a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a className="nav-link" href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a className="nav-link" href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a className="nav-link" href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
          <li><a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
