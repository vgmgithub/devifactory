import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageGallery({ categoryId }) {
  const [images, setImages] = useState([]);
  const getImageUrl = (filePath) => {
   
    return `http://localhost:5000/api/getImage/${filePath}`;
};
  useEffect(() => {

    
    // Make a GET request to fetch images based on the category ID
    axios.get(`http://localhost:5000/api/images/${categoryId}`)
      .then((response) => {
        setImages(response.data);
        console.log(images)
      })
      .catch((error) => {
        console.error(error);
      });
    
    console.log(images);
  }, [categoryId]);

  return (
    <>
      <Carousel>
    {
      
      images.map((image) => (
        <div  key={image._id}>
          <img src={getImageUrl(image.fileName)} alt={image.categoryid} key={image._id} />
          </div>
      ))}
        </Carousel>
    </>
  );
}

export default ImageGallery;