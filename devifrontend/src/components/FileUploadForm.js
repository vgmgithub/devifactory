import React, { useState } from 'react';
import axios from 'axios';

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
    } catch (error) {
      console.error('Error uploading files:', error);
      setMessage('File upload failed');
    }
  };

  return (
    <div>
      <h2>Multiple File Upload</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="file" multiple onChange={handleFileChange} />
              
              
            <select value={category} onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  {categorie.map((category) => (
                        <option value={category.category}>{category.category}</option>
                     
                    ))}
                
               
            </select>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUploadForm;
