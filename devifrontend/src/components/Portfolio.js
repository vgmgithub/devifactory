// src/components/Portfolio.js
import React from 'react';

const Portfolio = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project) => (
        <div className="col-md-4" key={project.id}>
          <div className="card portfolio">
            <img
              src={project.imageSrc}
              className="card-img-top"
              alt={project.title}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
