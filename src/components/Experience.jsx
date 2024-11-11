/* eslint-disable react/prop-types */
const Experience = ({experience}) => {
  return (
    <div>
      <h1 className="h1-style">
        {experience.title}
      </h1>
      <p className="experience-description">
        {experience.description}
      </p>

      <img className="experience-image" src={"images/experiences/"+experience.image} />
    </div>
  );
};

export default Experience;
