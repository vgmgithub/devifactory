import React from 'react'
import RandomShuffleText from './RandomShuffleText'
import { Link } from 'react-router-dom';
// const isLoggedIn = localStorage.getItem('user');
let isLocalStorageEmpty;
if (localStorage.getItem('user') !== null) {
    // Item exists in localStorage
    // You can access it using localStorage.getItem('itemName')
    const newUser = localStorage.getItem('user');
    console.log('Item exists:', newUser);
    isLocalStorageEmpty = true;
  } else {
    // Item does not exist in localStorage
    console.log('Item does not exist');
    isLocalStorageEmpty = false;

  }
// const isLocalStorageEmpty = localStorage.getItem('user').length === 0;
// const newUser = localStorage.getItem('user');

const Dashboard = () => {
    return (
      <div className='body'>
        
        <div className='containter'>
        <div className='row'>
          {/* <div className='containter'> */}
            <div className="center-text">
              
              <h1 className='admintitle'>
                  {isLocalStorageEmpty ? (
                      // Render content for authenticated users
                      <>
                      <span className='title-highlight'>Welcome Back</span> <RandomShuffleText text={'Saranya'} compstyle={2} /><span className='title-highlight'>, </span>
                      </>
                    ) : (
                    <Link to="/admin"></Link>
                      
                      
                  )}  
                
            </h1>
              <p className='admintag'> -------------------Devi Art Factory------------------- </p>
              <div className='row'>
          <div className='col-md-3'>
            <RandomShuffleText text={'25'} compstyle={3} />
            <p className='title-highlight'>Happy Customers</p>
          </div>
          <div className='col-md-3'>
              <RandomShuffleText text={'5'} compstyle={3} />
              <p className='title-highlight'>Booking Enquiry</p>
          </div>
          <div className='col-md-3'>
              <RandomShuffleText text={'4'} compstyle={3} />
              <p className='title-highlight'>Art Category</p>
          </div>
          <div className='col-md-3'>
              <RandomShuffleText text={'26'} compstyle={3} />
              <p className='title-highlight'>Art Uploads</p>
          </div>
           
            </div>
            </div>
            
        </div>
        
        </div>
        </div>
  )
}

export default Dashboard