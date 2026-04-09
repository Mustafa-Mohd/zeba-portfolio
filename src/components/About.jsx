import React from 'react';
import { Mail, MapPin, GraduationCap, Briefcase, Download } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <span className="section-tag">// about me</span>
        <h2 className="section-title">Who Am <span className="gradient-text">I?</span></h2>
      </div>
      <div className="about-grid">
        <div className="about-image">
          <div className="about-img-frame">
            <img src="/assets/images/zeba image.png" alt="Zeba Yasmeen profile" draggable="false" />
            <div className="about-img-accent"></div>
          </div>
        </div>
        <div className="about-content">
          <div className="about-name-tag">
            <h3>Zeba Yasmeen</h3>
            <span className="role-chip"><i className="fas fa-code"></i> Full Stack Developer</span>
          </div>
          <p className="about-bio">
            I'm a passionate Full-Stack Developer based in <strong>Hyderabad, India</strong>,
            currently pursuing my <strong>M.Tech</strong> at Vasavi College of Engineering.
            I specialize in building end-to-end web applications using the <strong>MERN Stack</strong>
            and love crafting pixel-perfect, user-friendly digital experiences.
          </p>
          <p className="about-bio">
            I thrive on turning complex problems into elegant solutions — from designing clean UIs
            to architecting scalable backends.
          </p>
          <div className="about-info-grid">
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <span className="info-label">Email</span>
                <span className="info-value">Zebayasmeen2002@gmail.com</span>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <span className="info-label">Location</span>
                <span className="info-value">Hyderabad, India</span>
              </div>
            </div>
            <div className="info-item">
              <GraduationCap className="info-icon" />
              <div>
                <span className="info-label">Degree</span>
                <span className="info-value">M.Tech (Pursuing 2025)</span>
              </div>
            </div>
            <div className="info-item">
              <Briefcase className="info-icon" />
              <div>
                <span className="info-label">Status</span>
                <span className="info-value available">Open to Work</span>
              </div>
            </div>
          </div>
          <div className="hobbies-container">
            <h4><span className="gradient-text">Hobbies</span> & Interests</h4>
            <div className="hobbies-tags">
              <span className="hobby-chip">✈️ Travelling</span>
              <span className="hobby-chip">🎨 Painting</span>
              <span className="hobby-chip">✏️ Drawing</span>
              <span className="hobby-chip">🍳 Cooking</span>
            </div>
          </div>
          <div className="about-actions">
            <a href="https://drive.google.com/file/d/1cnsyc5Ap0qmfi2M0SpmbgNMPs2NEvE71/view" target="_blank" rel="noreferrer" className="btn-primary">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
