import React from "react";

export default function Info() {
  return (
    <div className="info-section">
      <img src="/images/cameronworking.jpg"></img>
      <h1 className="heading">Cameron Boyle</h1>
      <p className="subheading">Junior Frontend Developer</p>
      <a className="bento" href="https://bento.me/cambboyle" target="_blank">
        bento.me/cambboyle
      </a>
      <div className="buttons">
        <a href="mailto:cambboyle@gmail.com" className="email">
          <i className="fa-solid fa-envelope"></i>
          Email
        </a>
        <a href="https://www.linkedin.com/in/cbb00/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
