import Constants from "../Constants";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-img">
          <img
            src="images/profile-pic.jpg"
            alt="Siddharth Kumar"
            className="about-pic"
          />
        </div>
        <div className="about-text-box" 
        dangerouslySetInnerHTML={{__html:Constants.aboutPage.content}}></div>
      </div>
      <hr />
    </section>
  );
};

export default About;
