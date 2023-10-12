import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageGallery({ categoryId }) {
const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [images, setImages] = useState([]);
  const getImageUrl = (filePath) => {
   
    return `http://${BASE_URL}:5000/api/getImage/${filePath}`;
};
  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    
    // Make a GET request to fetch images based on the category ID
    axios.get(`http://${BASE_URL}:5000/api/images/${categoryId}`)
      .then((response) => {
        setImages(response.data);
        // console.log(images)
      })
      .catch((error) => {
        console.error(error);
      });
    
    // console.log(images);
  }, [categoryId]);

  return (
    <>
      <Carousel>
    {
      
      images.map((image) => (
        <div  key={image._id}>
          <img src={getImageUrl(image.fileName)} alt={image.categoryid} key={image._id} />
          <span className='titleadmin'>Title: {image.title}</span>
          </div>
      ))}
        </Carousel>
    </>
  );
}

export default ImageGallery;
