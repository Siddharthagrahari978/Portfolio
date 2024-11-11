import Constants from "../Constants";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="title-heading">
          <h1>Projects</h1>
          <p>These are some of my projects</p>
        </div>
      </div>
      {Constants.projects.map((project, index)=>{
        return (<Project key={index} project={project} />)
      })}
      <hr />
    </section>
  );
};

export default Projects;
