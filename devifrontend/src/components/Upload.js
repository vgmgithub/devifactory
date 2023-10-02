import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Upload = () => {
  const intialstate ={
    category: '',
    active: false,
  }
  const [categoryName, setCategoryName] = useState([intialstate]);


const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryName({
    ...categoryName,
    [name]: value,
    });
};


const handleSubmit = (e) => {
  e.preventDefault();
   // Perform form validation here
 
// Handle form submission, e.g., send data to server or display a success message
  console.log('Form data:', categoryName);




  fetch('http://localhost:5000/api/categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoryName),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response here (success or error)
       
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Category Added!',
        showConfirmButton: false,
        timer: 2500
        
      }).then(() => {
        
            // Reload the page after a short delay (e.g., 500 milliseconds)
            setTimeout(() => {
              window.location.reload();
            }, 500);
        
       
      });
        
    })
    .catch((error) => {
      // Handle errors here
      console.error(error);
    });
  
  
  
};

  
 
  
useEffect(() => {
  // Fetch categories from your API
  fetch('http://localhost:5000/api/category') // Update with your API endpoint
    .then((response) => response.json())
    .then((data) => {
      setCategoryName(data);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching categories:', error);
    });
}, []);
  return (
      <>
          <h2 className='deviborder'>Upload Data</h2><br /><br /><br />
          {/* <h2 className='deviborder'>Services</h2><br /><br /><br /> */}
          
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
                <h5> Category</h5>
                <form onSubmit={handleSubmit}>
                  <label className='input-group'>
                    <input
                      className='form-control'
                  type="text"  
                  id="category"
                  name='category' 
                  value={categoryName.category}
                      placeholder='Catergory Name'  
                      onChange={handleChange}
                    />
                  
                <button type="submit" className='btn btn-primary contactbtn'><FontAwesomeIcon icon={faAdd}/></button>
                </label>
                </form>
              </div>
              <div className='col-md-6'>
              <table class="table table-striped">
              
                <caption>Category List</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Catergory</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                {categoryName.map((category) => (
                  <tr key={category._id}>
                    <td>{category._id}</td>
                    <td>{category.category}</td>
                    <td>{category.active}</td>
                    {/* Add more table cells for other category properties */}
                  </tr>
                ))}
                  
                </tbody>
              </table>
              </div>
          </div>                 
        </div>
                 
        
      </>
  )
}

export default Upload
