// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import CategoryTabs from './CategoryTabs';
// import portfolioData from './PortfolioData';
import Contact from './Contact';

const HomePage = () => {

  const [portfolioData, setportfolioData] = useState([]);

  useEffect(() => {

  const BASE_URL = process.env.REACT_APP_BASE_URL;
    
 

  // Fetch the data from the API and assign it to the portfolioData variable
  fetch(`http://${BASE_URL}:5000/api/images`) // Replace with your API URL
    .then(response => response.json())
    .then(data => {
      setportfolioData(data);
        
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  // console.log(portfolioData)
    const categories = [...new Set(portfolioData.map((project) => project.category))];
    // const categories  = new Set(portfolioData.map(item => item.category));
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const filteredProjects = portfolioData.filter(
        (project) => project.category === activeCategory
    );
  console.log('filter------------' + portfolioData);
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };


 
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (sectionId) => {
    
    // Display an alert when a link is clicked
    //   alert(`You clicked on ${sectionId}`);
      setActiveLink(sectionId);
      const storedUserName = localStorage.getItem('user');
    console.log('stored anme  '+storedUserName); // Outputs 'John Doe'
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuClasses = `navbar-collapse ${isMenuOpen ? 'show' : ''}`;

  return (
    <div>
      <nav id="navbar-example" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
                  <a  className="navbar-brand titleicon" href="#home" onClick={() => handleClick('')}><span className='title-highlight-icon'>DEVI</span> ART <span className='title-highlight-icon'>FACTORY</span></a>
                
             
          <button  className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={menuClasses} id="navbarNav">
            <ul  className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li> */}
              <li className="nav-item">
                <a className={activeLink === 'about' ? 'nav-link active' : 'nav-link'} href="#about" onClick={() => handleClick('about')}>About Devi</a>
              </li>
              <li className="nav-item">
                <a className={activeLink === 'portfolio' ? 'nav-link active' : 'nav-link'}  href="#portfolio" onClick={() => handleClick('portfolio')}>Portfolio</a>
              </li>
              <li className="nav-item">
                <a className={activeLink === 'services' ? 'nav-link active' : 'nav-link'} href="#services" onClick={() => handleClick('services')}>Services</a>
              </li>
              <li className="nav-item">
                <a className={activeLink === 'contact' ? 'nav-link active' : 'nav-link'}  href="#contact" onClick={() => handleClick('contact')}>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" className="scrollspy-example">
          <div id="home" >
                <Home />
                  
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

export default HomePage;
