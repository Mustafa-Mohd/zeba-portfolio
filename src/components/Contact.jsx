import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
    emailjs.sendForm('contact_service', 'template_contact', e.target)
      .then((result) => {
        setLoading(false);
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(null), 4000);
      }, (error) => {
        setLoading(false);
        setStatus('error');
        setTimeout(() => setStatus(null), 3000);
      });
  };

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
            <a href="tel:+917036715802" className="contact-link-item">
              <div className="contact-link-icon"><Phone /></div>
              <div>
                <span className="contact-link-label">Phone</span>
                <span className="contact-link-val">+91 7036715802</span>
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

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-wrapper">
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <div className="input-wrapper">
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <div className="input-wrapper textarea-wrapper">
                <textarea id="message" name="message" placeholder="Tell me about your project..." rows="5" required></textarea>
              </div>
            </div>
            <button type="submit" className={`btn-primary submit-btn ${status || ''}`} disabled={loading}>
              {loading ? (
                <><span className="spinner-icon"><Loader2 className="animate-spin" /></span> Sending...</>
              ) : status === 'success' ? (
                <><CheckCircle /> Message Sent!</>
              ) : status === 'error' ? (
                <><AlertTriangle /> Failed — Try Again</>
              ) : (
                <><span>Send Message</span> <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
