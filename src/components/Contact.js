import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="left">
        <h1>My Contact Information</h1>
      </div>
      <div className="right">
        <p>
          <h3><a href="mailto:jessica.feng@outlook.com">jessica.feng@outlook.com</a></h3>
          <h3><a href="https://www.linkedin.com/in/jessica-feng-69671b111/" target="_blank">https://www.linkedin.com/in/jessica-feng-69671b111/</a></h3>
          <h3><a href="https://github.com/fengjess" target="_blank">github.com/fengjess</a></h3>
        </p>
      </div>
    </div>
  );
};

export default Contact;
