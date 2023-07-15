import React from "react";
import "./service.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Service = () => {
  return (
    <section id="service">
      <h5>I can help in </h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h4>Research Works</h4>
          </div>

          <div>
            <ul className="service__list">
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>
                <b>Project Title </b> Prognosis of Acute Lymphoblastic Leukemia
                Using Microscopic Images by Inception V3 based transfer Learning
                Model.
              </p>

              <li>
                <p>
                  <b>Project Overview </b> A deep transfer learning-based
                  Inception V3 model was deployed to accurately detect Acute
                  Lyphoblastic Leukemia using Microscopic images.
                  <br />
                  <a
                    href="https://ieeexplore.ieee.org/document/9719003"
                    className="btn btn-primary"
                  >
                    Read the paper
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="service">
          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>
                <b>Project Title:</b> Deep Transfer Learning Based Multi-Class
                Brain Tumors Classification Using MRI Images
                <br />
                <b>Project Overview </b>
                <br />
                A deep transfer learning-based VGG-19 is deployed to accurately
                detect 3 types of cancer using Brain MRI images.
                <br />
                <a
                  href="https://ieeexplore.ieee.org/document/10114522"
                  className="btn btn-primary"
                >
                  Read the paper
                </a>
              </p>
            </li>
          </ul>
        </article>

        <br />

        {/* end of research project */}

        {/* 
start of web project */}

        <article className="service">
          <div className="service__head">
            <h4>Fullstack Web development</h4>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>
                <b>Project Title:</b> Probaho Courier Service
                <br />
                <b>Project Overview </b>
                • Integrating DB to keep count of customer order
                <br />
                • Implementing authentication & resetting password for users
                <br />
                • Automated the bill & memo generation
                <br />• Implementing CRUD operations.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>
                <b>Project Title:</b> Helper Guide, Daily workers Nearby
                <br />
                <b>Project Overview </b>
                <br />
                • User & client authentication
                <br />
                • Posting jobs for helpers (electracians, machanics,
                carpentars).
                <br />
                • Rating the helpers & filtering them on the list.
                <br />• Automated the users (helpers) profile & showcasing them
                to get work directly from the website.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <ul className="service__list">
            <li>
              <AiOutlineCheckCircle className="service__list-icon" />
              <p>
                <b>Project Title:</b> Audio Book
                <br />
                <b>Project Overview </b>
                Converting a pdf into Audio Book using python built-in methods
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
