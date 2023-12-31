import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import "./Summary.css";

import pic from "/images/pp.png";
import lnkOut from "/images/linkedin.png";
import lnkOver from "/images/linkedin2.png";
import gitOut from "/images/github.png";
import gitOver from "/images/github2.png";
import arg from "/images/arg.png";
import spa from "/images/spa.png";

export const Summary = () => {
  const [lnkMouOver, setLknOver] = useState(false);
  const [gitMouOver, setgitOver] = useState(false);

  return (
    <div id="summary">
      <div className="summary-info">
        <div className="links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/maria-pia-nattero"
                rel="noreferrer"
                target="_blank"
              >
                <div
                  onMouseOver={() => setLknOver(true)}
                  onMouseOut={() => setLknOver(false)}
                >
                  <img src={lnkMouOver ? lnkOver : lnkOut} />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pianattero"
                rel="noreferrer"
                target="_blank"
              >
                <div
                  onMouseOver={() => setgitOver(true)}
                  onMouseOut={() => setgitOver(false)}
                >
                  <img src={gitMouOver ? gitOver : gitOut} />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1>
            Hello! <br /> I am Pía
          </h1>
          <h2 style={{ color: "gray", fontWeight: 200 }} className="pb-2">
            Frontend Developer
          </h2>
          <h6 style={{ color: "gray", fontWeight: 100, fontSize: 14 }}>
            From <img src={arg} style={{ width: 15 }} /> Buenos Aires,
            Argentina, <br /> currently living in{" "}
            <img src={spa} style={{ width: 15 }} /> Madrid, Spain.
          </h6>
          <HashLink to="#contact">
            <button className="btn btn-dark contact-btn">
              <i className="bi bi-send"></i> Contact Me
            </button>
          </HashLink>
        </div>
        <img className="pics" src={pic} />
      </div>
      <HashLink to="#about-me">
        <button className="btn btn-dark scroll-btn">
          <i className="bi bi-arrow-down-short"></i>
          Scroll down
          <i className="bi bi-arrow-down-short"></i>
        </button>
      </HashLink>
    </div>
  );
};
