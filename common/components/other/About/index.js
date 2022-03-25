import React from "react";

const About = ({ description }) => {
  return (
    <div className="col-12 about" data-aos="fade-up">
      <div className="primary-text">{description}</div>
    </div>
  );
};

export default About;
