import React from "react";
import "./about.css";
import MEIM from "../../assets/me.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5> Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about__me-image">
            <img src={MEIM} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>
                Mass Holdings Inc.
                <br />& Kikuya Bishodou
              </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Working with</h5>
              <small>2+ Months have been working</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Complitted & Ongoing</small>
            </article>
          </div>

          <p>
            Being a great enthusiast and passionate about problem solving,
            programming challenges, AI. I have tired to increase my analytical
            skills through learning algorithms, competitive programming,
            Datathon and building projects to become an excellent software
            engineer. In professional carrier my objective is to solve real-life
            problems and challenges using modern methods and technologies. I am
            determine to learn anything required to solve the given tasks. I
            have confidence in working with teammates.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
