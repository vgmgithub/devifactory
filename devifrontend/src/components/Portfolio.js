import React from 'react';
const Portfolio = ({ projects }) => {
const BASE_URL = process.env.REACT_APP_BASE_URL;

  let messageToDisplay;
  if (!projects || Object.keys(projects).length === 0) {
    messageToDisplay = <h6 className='infotap'>Click any of the above category !</h6>;
  } else {
    // Render your data here
    // For example, if data is an object, you can render it as JSON
     messageToDisplay = "";
  }
console.log('prooooooooo ..'+projects)
  const getImageUrl = (filePath) => {
   
      return `http://${BASE_URL}:5000/api/getImage/${filePath}`;
  };
  return (
    <div className="row screenprofile">
      
      {projects.map((project) => (
        <div className="col-md-4" key={project._id}>
          <div className="card portfolio">
            <img src={getImageUrl(project.fileName)} className="card-img-top" alt={project.title} key={project._id} 
              
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.category}</p>
            </div>
          </div>
        </div>
      ))}
        
       
{messageToDisplay}
    </div>
  );
};

export default Portfolio;
