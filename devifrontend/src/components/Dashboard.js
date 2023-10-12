import React, { useEffect, useState } from 'react'
import RandomShuffleText from './RandomShuffleText'
import { Link } from 'react-router-dom';
import axios from 'axios';
// const isLoggedIn = localStorage.getItem('user');

const isAuthenticated = localStorage.getItem('authenticated');

const Dashboard = () => {
const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [contactcount, setCount1] = useState('loading');
  const [categorycount, setCount2] = useState('loading');
  const [datauploadcount, setCount3] = useState('loading');
  const [happycus, setCount4] = useState('loading');
  
   // Define a function to fetch collection count
   const fetchCollectionCount = async (collectionName) => {
     try {
      // console.log(`http://${BASE_URL}:5000/api/count/${collectionName}`)
      const response = await axios.get(`http://${BASE_URL}:5000/api/count/${collectionName}`);
      return response.data.count;
    } catch (error) {
      console.error('Error fetching collection count:', error);
      return null;
    }
  };
  // eslint-disable-next-line
  useEffect(() => {
    const collectionName1 = 'contacts'; // Change to your actual collection name
    fetchCollectionCount(collectionName1)
      .then((result) => {
        setCount1(result);
      });
// eslint-disable-next-line
    const collectionName2 = 'categories'; // Change to your actual collection name
    fetchCollectionCount(collectionName2)
      .then((result) => {
        setCount2(result);
      });
// eslint-disable-next-line
    const collectionName3 = 'datauploads'; // Change to your actual collection name
    fetchCollectionCount(collectionName3)
      .then((result) => {
        setCount3(result);
      });
    // eslint-disable-next-line
    
    const collectionName4 = 'happycus'; // Change to your actual collection name
    fetchCollectionCount(collectionName4)
      .then((result) => {
        setCount4(result);
      });
    // eslint-disable-next-line
  }, []);

    return (
      <div className='body'>
        
        <div className='containter'>
        <div className='row'>
          {/* <div className='containter'> */}
            <div className="center-text">
              
              <h1 className='admintitle'>
            
                {!isAuthenticated ? (<Link to="/admin"></Link> ):(<></>)}
                   
                      <>
                      <span className='title-highlight'>Welcome Back</span> <RandomShuffleText text={'Saranya'} compstyle={2} /><span className='title-highlight'>, </span>
                      </>
                   
                
            </h1>
              <p className='admintag'> -------------------Devi Art Factory------------------- </p>
              <div className='row'>
          <div className='col-md-3'>
            <RandomShuffleText text={happycus.toString()} compstyle={3} />
            <p className='title-highlight'>Happy Customers</p>
          </div>
          <div className='col-md-3'>
              <RandomShuffleText text={contactcount.toString()} compstyle={3} />
              <p className='title-highlight'>Booking Enquiry</p>
          </div>
          <div className='col-md-3'>
              <RandomShuffleText text={categorycount.toString()} compstyle={3} />
              <p className='title-highlight'>Art Category</p>
          </div>
          <div className='col-md-3'>
              <RandomShuffleText text={datauploadcount.toString()} compstyle={3} />
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