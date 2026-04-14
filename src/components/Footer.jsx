import React from 'react';
import { Heart, ChevronRight, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-bracket">&lt;</span>Zeba<span className="logo-slash">/</span><span className="logo-bracket">&gt;</span>
          </a>
          <p>Full Stack Developer crafting beautiful digital experiences.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home"><ChevronRight size={14} /> Home</a>
          <a href="#about"><ChevronRight size={14} /> About</a>
          <a href="#skills"><ChevronRight size={14} /> Skills</a>
          <a href="#projects"><ChevronRight size={14} /> Projects</a>
          <a href="#education"><ChevronRight size={14} /> Education</a>
          <a href="#contact"><ChevronRight size={14} /> Contact</a>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>

          <p><Mail size={14} className="accent-icon" /> Zebayasmeen2002@gmail.com</p>
          <p><MapPin size={14} className="accent-icon" /> Hyderabad, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed & built with <Heart size={14} className="pulse heart-icon" /> by <strong>Zeba Yasmeen</strong></p>
        <p className="footer-copy">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
