import React from 'react';
import { BookOpen, GraduationCap, School, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-header">
        <span className="section-tag">// my journey</span>
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        <p className="section-desc">"Education is not the learning of facts, but the training of the mind to think."</p>
      </div>

      <div className="education-timeline">
        <div className="edu-card">
          <div className="edu-icon-wrapper">
            <div className="edu-icon"><BookOpen /></div>
            <div className="edu-line"></div>
          </div>
          <div className="edu-content">
            <div className="edu-header">
              <div>
                <span className="edu-status pursuing">Pursuing</span>
                <h3>Master of Technology (M.Tech)</h3>
                <p className="edu-institution"><MapPin size={14} /> Vasavi College of Engineering, Ibrahim Bagh, Hyderabad</p>
              </div>
              <span className="edu-year">2023 – 2025</span>
            </div>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-icon-wrapper">
            <div className="edu-icon"><GraduationCap /></div>
            <div className="edu-line"></div>
          </div>
          <div className="edu-content">
            <div className="edu-header">
              <div>
                <span className="edu-status completed">Completed</span>
                <h3>Bachelor of Engineering (B.E.)</h3>
                <p className="edu-institution"><MapPin size={14} /> Shadan Women's College of Engineering, Khairtabad, Hyderabad</p>
              </div>
              <span className="edu-year">2019 – 2023</span>
            </div>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-icon-wrapper">
            <div className="edu-icon"><School /></div>
          </div>
          <div className="edu-content">
            <div className="edu-header">
              <div>
                <span className="edu-status completed">Completed</span>
                <h3>Intermediate (12th)</h3>
                <p className="edu-institution"><MapPin size={14} /> Sri Chaitanya Junior College, S.R Nagar, Hyderabad</p>
              </div>
              <span className="edu-year">2017 – 2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
