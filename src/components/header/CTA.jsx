import React from "react";
import CV from "../../assets/Protiva_Ahammed_Resume_CSE_RUET_AI_Chem.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn" target="__blank">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Any Queries?
      </a>
    </div>
  );
};

export default CTA;
