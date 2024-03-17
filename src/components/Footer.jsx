import React from 'react';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Developed By
        <a href="https://www.linkedin.com/in/vaibhav-sukale/" target="_blank">
           Vaibhav Sukale
        </a>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    );
  };
export default Footer;