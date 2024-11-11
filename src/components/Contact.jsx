import Constants from "../Constants";

const Contact = () => {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h1>Get In Touch</h1>
      <p>
        {`I'd love if you reached out to me. Even if it's just to say "Hey!".
        Don't hesitate! Drop me a line and I’ll get back to you ASAP!`}
      </p>

      <div className="container">
        <p>
          <a href={"mailto:" + Constants.urls.email}>
            <i className="fas fa-envelope-open"></i> {Constants.urls.email}
          </a>
        </p>
        <p>
          <a href={Constants.urls.github} target="_blank">
            <i className="fab fa-github"></i> Github
          </a>
        </p>
        <p>
          <a href={Constants.urls.linkedin} target="_blank">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </p>
        <p>
          <a href={Constants.urls.instagram} target="_blank">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </p>
      </div>
      <hr />
    </section>
  );
};

export default Contact;
