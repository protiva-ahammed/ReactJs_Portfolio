import React from "react";
import "./footer.css";
import {AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
  <footer>
<a href="#" className='footer__logo'>Protiva Ahammed</a>
<ul className='permalinks'>

  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#service">Service</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonials">Testimonials</a></li>
  <li><a href="#contact">Content</a></li>

</ul>

<div className="footer__socials">
<a href="https://www.linkedin.com/in/protiva-ahammed-169015214" target="_blank"><AiFillLinkedin/> </a>
</div>

<div className="footer__copyright">
<small>&copy; Protiva Ahammed. All rights reserved.</small>
</div>
  </footer>
  )
}

export default Footer;
