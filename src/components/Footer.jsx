import Constants from "../Constants";
import DOMPurify from 'dompurify'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <a href="#landing-page" className="footer-nav-link">
          Home
        </a>
        <a href="#about" className="footer-nav-link">
          About
        </a>
        <a href="#services" className="footer-nav-link">
          Services
        </a>
        <a href="#projects" className="footer-nav-link">
          Projects
        </a>
        <a href="#contact" className="footer-nav-link">
          Contact
        </a>
        <a
          href={Constants.urls.resume}
          target="_blank"
          className="footer-nav-link"
        >
          My Resume
        </a>
      </div>
      <div className="footer-coded-by" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(Constants.footer.text)}}>
        
      </div>
      <div className="footer-social">
        <a href={`mailto:` + Constants.urls.email}>
          <i className="fas fa-envelope-open"></i>
        </a>
        <a href={Constants.urls.github} target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href={Constants.urls.linkedin} target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={Constants.urls.instagram} target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
