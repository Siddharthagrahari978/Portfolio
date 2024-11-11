/* eslint-disable react/prop-types */
import DOMPurify from 'dompurify'
const Project = ({ project }) => {
  return (
    <div className="project-item" data-aos="fade-right">
      <div className="project-img">
        {project.url ? <a href={project.url} target="_blank">
          <img src={`images/projects/${project.image}`} />
        </a> : <img src={`images/projects/${project.image}`} />}
      </div>
      <div className="project-description">
        <h1>{project.title}</h1>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(project.description)}}></p>
        {project.url && (
          <a href={project.url} target="_blank" className="btn">
            Have a look
          </a>
        )}
        {project.git && (
          <a href={project.git} className="project-link" target="_blank">
            <i className="fab fa-github" aria-hidden="true"></i> View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
