import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <span className="section-tag">// get in touch</span>
        <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
        <p className="section-desc">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's build something <span className="gradient-text">amazing</span> together</h3>
          <p>I'm currently open to freelance projects and full-time opportunities. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:Zebayasmeen2002@gmail.com" className="contact-link-item">
              <div className="contact-link-icon"><Mail /></div>
              <div>
                <span className="contact-link-label">Email</span>
                <span className="contact-link-val">Zebayasmeen2002@gmail.com</span>
              </div>
            </a>

            <div className="contact-link-item no-link">
              <div className="contact-link-icon"><MapPin /></div>
              <div>
                <span className="contact-link-label">Location</span>
                <span className="contact-link-val">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
