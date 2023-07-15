import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
   
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Start of Backend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className=".experience__details-icon ">
              <BsFillPatchCheckFill />
              <div>
                <h4>C, C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className=".experience__details-icon ">
              <BsFillPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className=".experience__details-icon ">
              <BsFillPatchCheckFill />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className=".experience__details-icon ">
              <BsFillPatchCheckFill />
              <div>
                <h4>Django </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className=".experience__details-icon ">
              <BsFillPatchCheckFill />

              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className=".experience__details-icon ">
              <BsFillPatchCheckFill />
              <div>
                <h4>Machine & Deep Learning</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className=".experience__details-icon ">
              <BsFillPatchCheckFill />
              <div>
                <h4>PostgreSql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
