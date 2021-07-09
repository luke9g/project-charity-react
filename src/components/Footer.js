import React from 'react';
import "../style/Footer.scss"
import facebook from "./../assets/images/Facebook.svg"
import instagram from "./../assets/images/Instagram.svg"

function Footer() {
  return (
    <footer>
      <div className="container footer-wrapper">
        <div className="footer-socials">
          <a href="https://www.facebook.com"><img src={facebook} alt=""/></a>
          <a href="https://www.instagram.com"><img src={instagram} alt=""/></a>
        </div>
        <div className="footer-copyright">
          Copyright by Łukasz B.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
