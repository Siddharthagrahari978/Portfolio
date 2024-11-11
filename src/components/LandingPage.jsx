import React from "react";
import Constants from "../Constants";

const LandingPage = () => {
  return (
    <section id="landing-page" className="landing-page">
      <div className="container">
        <div className="main-message">
          <h1>Siddharth Kumar</h1>
          <h3>{`{` + Constants.landingPage.title + `}`}</h3>
          {Constants.landingPage.skills.map((skills, index) => {
            return (
              <p key={index}>
                {skills.map((skill, index) => {
                  return (
                    <React.Fragment key={`skill-` + index}>
                      <span>{skill}</span>
                      {index + 1 != skills.length && (
                        <i className="fa-solid fa-circle"></i>
                      )}
                    </React.Fragment>
                  );
                })}
              </p>
            );
          })}
          <div className="intro-btn">
            <div className="cta">
              <a href="#contact" className="btn">
                Work With Me
              </a>
            </div>
          </div>
          <div>
            <a href="#about" className="scroll-down">
              <span className="material-icons">expand_more</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
