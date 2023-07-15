import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* target blank means it will open in a new tab */}

      <a
        href="https://www.linkedin.com/in/protiva-ahammed-169015214"
        target="__blank"
      >
        <BsLinkedin style={{ fontSize: 34 }} />
      </a>
      <a
        href="https://github.com/protiva-ahammed?tab=repositories"
        target="__blank"
      >
        <BsGithub style={{ fontSize: 34 }} />
      </a>
      <a
        href="https://scholar.google.com/citations?hl=en&user=VlMqVhAAAAAJ"
        target="__blank"
      >
        <SiGooglescholar style={{ fontSize: 34 }} />
      </a>
    </div>
  );
};

export default HeaderSocials;
