// src/components/Scrollspy.js
import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import CategoryTabs from './CategoryTabs';
import portfolioData from './PortfolioData';
import Contact from './Contact';

const Scrollspy = () => {

    const categories = [...new Set(portfolioData.map((project) => project.category))];

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const filteredProjects = portfolioData.filter(
        (project) => project.category === activeCategory
    );

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };
  return (
    <div>
      <nav id="navbar-example" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
                  <a className="navbar-brand titleicon" href="#home"><span className='title-highlight-icon'>Devi</span> Art <span className='title-highlight-icon'>Factory</span></a>
                
             
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#about">About Devi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" className="scrollspy-example">
          <div id="home"  >
                <Home/>
                  
            </div>
            <div id="about" className='contentsection'>
               
                    
                    <About/>
                    
                    
            </div>
            <hr/>
            <div id="portfolio" className='contentsection'>
                
                <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <Portfolio projects={filteredProjects} />
            </div>
            <hr/>
            <div id="services" className='contentsection'  >
                
                    <Services/>
              </div>
              <hr/>
            <div id="contact"  >
              <Contact/>
                    
                    
            </div>
          </div>
          
    </div>
  );
};

export default Scrollspy;
