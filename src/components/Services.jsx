const Services = () => {
  return (
    <section id="services" className="services" data-aos="fade-up">
      <div className="container">
        <div className="title-heading">
          <h1>Digitize your business</h1>
          <p>
            I will help you make your first impression remarkable with my
            creativity and knowledge of rolling technology.
          </p>
        </div>
        <div className="service-tiers">
          {/* <!-- First service --> */}
          <div className="tier-item web-development">
            <span className="material-icons">code</span>
            <h1>DevOps</h1>
            <p>
              Take care of your Product and Business continuity in Style with
              technologies like Jenkins, Docker, etc. You name it. I will make
              it happen!
            </p>
          </div>

          {/* <!-- Second service --> */}
          <div className="tier-item responsive-design">
            <span className="material-icons">devices</span>
            <h1>Responsive Design</h1>
            <p>
              {`In 2021 you can't go online without having a mobile responsive
              website. Let me take care of that for you!`}
            </p>
          </div>

          {/* <!-- Third service --> */}
          <div className="tier-item psd-html">
            <span className="material-icons">developer_mode</span>
            <h1>PSD to HTML</h1>
            <p>
              If you already have a design in Photoshop, Invision or any other
              format, I can convert it from scratch into pixel-perfect
              HTML/CSS/JS website.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Services;
