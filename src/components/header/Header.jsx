import React from "react";
import "./header.css";
import CTA from "./CTA";
import MEIM from "../../assets/protiva1.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm </h5>
        <h1>Protiva Ahammed</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={MEIM} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
