import React, { useState } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';

import ImageGallery from './ImageGallery'


const FileUploadForm = (props) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const categorie = props.category;
    console.log(categorie)
  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('category', category); // Add the category field to the FormData

    try {
      const response = await axios.post('http://localhost:5000/api/upload-files', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

        setMessage(response.data.message);
        // setTimeout(() => {
        //     window.location.reload();
        //   }, 500);
      
    } catch (error) {
      console.error('Error uploading files:', error);
      setMessage('File upload failed');
    }
  };
  // const images = [
  //   'image1.jpg',
  //   'image2.jpg',
  //   'image3.jpg',
  //   // Add more image URLs as needed
  // ];

  return (
    <div>
      <h2>Work Profile Upload</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="file" className='form-control' multiple onChange={handleFileChange} />
              <br></br>
              
            <select value={category} className='form-control' onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  {categorie.map((category) => (
                        <option value={category._id}>{category.category}</option>
                     
                    ))}
                
               
            </select>
        <button type="submit" className='btn btn-primary contactbtn' style={{marginTop:"5px"}}>Upload</button>
      </form>
          {message && <p className='filestatus'>{message}</p>}
          <hr></hr>
          <Tab.Container id="my-tabbed-component" defaultActiveKey="tab1">
              <Nav variant="tabs">
                  
              {categorie.map((category) => (
                        
                        <Nav.Item>
                        <Nav.Link eventKey={category._id}>{category.category}</Nav.Link>
                      </Nav.Item>
                    ))}
        
      
      </Nav>
              <TabContent>
                  {categorie.map((category) => (
                      <TabPane eventKey={category._id}>
                          {/* <p>Content for Tab {category.category} goes here.</p> */}
                       
                            <ImageGallery categoryId={category._id}/>
                       
                      </TabPane>
                  ))}
      </TabContent>
    </Tab.Container> 
    </div>
  );
};

export default FileUploadForm;
