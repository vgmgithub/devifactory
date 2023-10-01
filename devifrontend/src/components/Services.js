import React from 'react'

const Services = () => {
  return (
      <>
          <h2 className='deviborder'>I Can Do</h2><br /><br /><br />
          {/* <h2 className='deviborder'>Services</h2><br /><br /><br /> */}
          
        <div className='row'>
            <div className='col-md-10'>
                <div className='row'>
                <div className="service col-md-4">
                    <h5>Custom Canvas Paintings</h5>
                    <p>Are you looking to decorate your home or office with unique and personalized art? Our custom canvas painting service allows you to commission an artist to create a one-of-a-kind masterpiece that reflects your vision and style. Whether it's a portrait, abstract art, or a specific theme, we'll transform your ideas into stunning artworks.</p>
                </div>

                <div className="service col-md-3">
                    <h5>Portrait Paintings</h5>
                    <p>Capture the beauty and essence of your loved ones with our portrait painting service. Our skilled artists can turn your favorite photos into lifelike portraits, preserving cherished memories and emotions on canvas. A perfect gift for special occasions or to adorn your walls with meaningful art.</p>
                </div>
                
                <div className="service col-md-3">
                    <h5>Landscape Paintings</h5>
                    <p>Bring the beauty of nature into your living space with our landscape painting offerings. Choose from a range of serene landscapes, cityscapes, or even request a custom scene. Our artists excel in capturing the essence of different environments, allowing you to escape into the world of art.</p>
                </div>
                <div className="service col-md-3">
                    <h5>Abstract Art Creations</h5>
                    <p>Explore the world of abstract art with our abstract painting service. Abstract art offers a unique way to express emotions, thoughts, and concepts through colors and shapes. Let our artists create bold and thought-provoking abstract pieces that add a touch of creativity to your surroundings.</p>
                </div>

                <div className="service col-md-3">
                    <h5>Corporate Artwork</h5>
                    <p>Elevate your workspace with our corporate artwork solutions. We specialize in creating professional and inspiring art pieces that enhance the ambiance of offices, boardrooms, and public spaces. Impress clients and employees alike with custom corporate art tailored to your brand.</p>
                </div>
                <div className="service col-md-4">
                    <h5>Art Classes and Workshops</h5>
                    <p>Interested in learning the art of painting? Join our art classes and workshops led by experienced instructors. Whether you're a beginner or an experienced artist looking to refine your skills, we offer a range of classes to suit your needs.</p>
                </div>
                </div>
                  
            </div>
              <div className='col-md-2'>
                  
                  <img src='images/easel-png.png' className='easel' alt='easel' />
                  <span className="incline-text"><span className="customercount"  >25</span>&nbsp;Happy Customer's</span>
            </div>
                 
        </div>
                 
        
      </>
  )
}

export default Services
