import React, { useState } from 'react';
import '../css/Contact.css';
import mailIcon from '../images/mail-svgrepo-com.svg';
import whatsappIcon from '../images/whatsapp-svgrepo-com.svg';

const EMAIL = 'jovana.papric2@gmail.com';
const PHONE = '+385 97 742 7265';

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="contact container">
      <header className="page-header">
        <h1 className="page-title">Let's work together</h1>
        <p className="page-subtitle">
          Have a project in mind or just want to say hi? Reach out!
        </p>
      </header>

      <div className="contact-cards">
        <button
          type="button"
          className="contact-card"
          onClick={() => handleCopy(EMAIL, 'email')}
        >
          <img src={mailIcon} alt="" className="contact-icon" />
          <span className="contact-label">Email</span>
          <span className="contact-value">
            {copied === 'email' ? 'Copied to clipboard!' : EMAIL}
          </span>
          <span className="contact-hint">Click to copy</span>
        </button>

        <button
          type="button"
          className="contact-card"
          onClick={() => handleCopy(PHONE, 'phone')}
        >
          <img src={whatsappIcon} alt="" className="contact-icon" />
          <span className="contact-label">Phone / WhatsApp</span>
          <span className="contact-value">
            {copied === 'phone' ? 'Copied to clipboard!' : PHONE}
          </span>
          <span className="contact-hint">Click to copy</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
