import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // We fetch from the local server we setup
    fetch('http://localhost:5000/api/skills')
      .then(res => {
        if (!res.ok) throw new Error('Backend responded with ' + res.status);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSkills(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(err => {
        console.error('Error fetching skills:', err);
        // Fallback if backend isn't awake or returns error
        setSkills([
          { name: "React", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
          { name: "Node.js", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
          { name: "Express", icon: "https://img.icons8.com/color/48/000000/express-js.png" },
          { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
          { name: "HTML5", icon: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
          { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
          { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" }
        ]);
      });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <span className="section-tag">// tech stack</span>
        <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
      </div>
      <div className="skills-wrapper">
        <div className="skills-grid">
          {Array.isArray(skills) && skills.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <img src={skill.icon} alt={skill.name} loading="lazy" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
