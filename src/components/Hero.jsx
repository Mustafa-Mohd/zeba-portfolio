import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';
import './Hero.css';

const Hero = () => {
  const el = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "full-stack web apps",
        "React experiences",
        "MERN stack solutions",
        "beautiful UIs",
        "scalable backends"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
      });
    }

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div id="particles-js"></div>
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Zeba Yasmeen</span>
          </h1>
          <div className="hero-typewriter">
            <span className="tw-prefix">I build </span><span className="typing-text" ref={el}></span>
          </div>
          <p className="hero-desc">
            M.Tech student & Full Stack Developer crafting modern web experiences with React, Node.js & the MERN stack.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk <MessageSquare size={18} />
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">MERN</span>
              <span className="stat-label">Stack Expert</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img-wrapper">
            <div className="hero-img-glow"></div>
            <img ref={tiltRef} src="/assets/images/hero.png" alt="Zeba Yasmeen" draggable="false" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
