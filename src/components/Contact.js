import React, { useState } from 'react';
import '../css/Contact.css';
import mailIcon from '../images/mail-svgrepo-com.svg';
import whatsappIcon from '../images/whatsapp-svgrepo-com.svg';

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">CONTACT ME</h1>

        <div className="contact-section">
          <div
            className="contact-info"
            onClick={() => handleCopy('jovana.papric2@gmail.com', 'email')}
          >
            <img src={mailIcon} alt="mail" className="contact-icon" />
            <p className="email">
              {copied === 'email' ? 'Copied!' : 'jovana.papric2@gmail.com'}
            </p>
          </div>

          <div
            className="contact-info"
            onClick={() => handleCopy('+385 97 742 7265', 'phone')}
          >
            <img src={whatsappIcon} alt="whatsapp" className="contact-icon" />
            <p className="phone">
              {copied === 'phone' ? 'Copied!' : '+385 97 742 7265'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;