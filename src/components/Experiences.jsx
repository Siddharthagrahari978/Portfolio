import Constants from "../Constants";
import Experience from "./Experience";
const Experiences = () => {
  return (
    <section id="experiences" className="experiences">
      <div className="container">
        <div className="title-heading">
          <h1>Past Work Experiences</h1>
          <p>These are My Work Experiences</p>
        </div>
      </div>

      {Constants.experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}

      <hr />
    </section>
  );
};

export default Experiences;
