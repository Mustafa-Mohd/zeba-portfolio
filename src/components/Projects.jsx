import React from 'react';
import { ExternalLink, Eye, ShoppingCart, Hospital, User } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span className="section-tag">// my work</span>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-desc">A curated selection of projects I've built — from e-commerce platforms to diagnostic systems.</p>
      </div>

      <div className="projects-grid">
        {/* Project 1: Ice Cream E-Commerce */}
        <div className="project-card featured">
          <div className="project-card-inner">
            <div className="project-preview">
              <div className="project-preview-bg icecream-bg">
                <div className="preview-mockup">
                  <div className="mockup-browser">
                    <div className="mockup-bar">
                      <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
                      <span className="mockup-url">mustafa-icecream.netlify.app</span>
                    </div>
                    <div className="mockup-screen icecream-screen">
                      <div className="mock-nav"></div>
                      <div className="mock-hero">
                        <div className="mock-h1"></div>
                        <div className="mock-p"></div>
                        <div className="mock-btn"></div>
                      </div>
                      <div className="mock-cards">
                        <div className="mock-card c1"></div>
                        <div className="mock-card c2"></div>
                        <div className="mock-card c3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-overlay">
                <a href="https://mustafa-icecream.netlify.app/" target="_blank" rel="noreferrer" className="preview-link">
                  <ExternalLink size={18} /> Live Preview
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-type"><ShoppingCart size={14} /> E-Commerce</span>
                <span className="project-featured-badge">⭐ Featured</span>
              </div>
              <h3 className="project-name">Ice Cream E-Commerce</h3>
              <p className="project-desc">
                A full-featured ice cream e-commerce platform with product listings, shopping cart, 
                order management, and a beautiful responsive UI. Built with modern web technologies 
                for a seamless shopping experience.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express</span>
              </div>
              <div className="project-links">
                <a href="https://mustafa-icecream.netlify.app/" target="_blank" rel="noreferrer" className="proj-btn-primary">
                  <Eye size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Hospital Diagnostic Platform */}
        <div className="project-card featured">
          <div className="project-card-inner">
            <div className="project-preview">
              <div className="project-preview-bg hospital-bg">
                <div className="preview-mockup">
                  <div className="mockup-browser">
                    <div className="mockup-bar">
                      <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
                      <span className="mockup-url">mawa-diagnostics.netlify.app</span>
                    </div>
                    <div className="mockup-screen hospital-screen">
                      <div className="mock-nav hosp-nav"></div>
                      <div className="mock-dashboard">
                        <div className="mock-sidebar"></div>
                        <div className="mock-main">
                          <div className="mock-stat-row">
                            <div className="mock-stat-card s1"></div>
                            <div className="mock-stat-card s2"></div>
                            <div className="mock-stat-card s3"></div>
                          </div>
                          <div className="mock-table">
                            <div className="mock-tr"></div>
                            <div className="mock-tr"></div>
                            <div className="mock-tr"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-overlay">
                <a href="https://mawa-diagnostics.netlify.app/" target="_blank" rel="noreferrer" className="preview-link">
                  <ExternalLink size={18} /> Live Preview
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-type"><Hospital size={14} /> Healthcare</span>
                <span className="project-featured-badge">⭐ Featured</span>
              </div>
              <h3 className="project-name">MAWA Diagnostics Platform</h3>
              <p className="project-desc">
                Full-featured diagnostic platform with patient records management, test booking system, 
                and automated report generation. Built with React and modern web technologies for 
                streamlined healthcare operations.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">REST API</span>
              </div>
              <div className="project-links">
                <a href="https://mawa-diagnostics.netlify.app/" target="_blank" rel="noreferrer" className="proj-btn-primary">
                  <Eye size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Portfolio Website */}
        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-preview">
              <div className="project-preview-bg portfolio-bg">
                <div className="preview-mockup small-mockup">
                  <div className="mockup-browser">
                    <div className="mockup-bar">
                      <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
                    </div>
                    <div className="mockup-screen portfolio-screen">
                      <div className="mock-port-hero">
                        <div className="mock-h1 port-h1"></div>
                        <div className="mock-p port-p"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-overlay">
                <a href="#home" className="preview-link">
                  <Eye size={18} /> You're Here!
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-type"><User size={14} /> Portfolio</span>
              </div>
              <h3 className="project-name">Developer Portfolio</h3>
              <p className="project-desc">
                My personal developer portfolio showcasing projects, skills and education. 
                Redesigned to a full React + Node.js application stack using modern practices!
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">Express</span>
              </div>
              <div className="project-links">
                <a href="#home" className="proj-btn-primary">
                  <Eye size={18} /> View Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
