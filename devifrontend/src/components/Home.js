import React from 'react'
import RandomShuffleText from './RandomShuffleText'
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
const newUser = localStorage.getItem('user');

const Home = () => {
    return (
        <div className='body'>
            <div className="center-text">
          
                <h1 className='title'>
                    {isLocalStorageEmpty ? (
                        // Render content for authenticated users
                        <>
                        <span className='title-highlight'>Welcome</span> <RandomShuffleText text={newUser} compstyle={2} /><span className='title-highlight'>,</span> to the <span className='title-highlight'>World</span> of <RandomShuffleText text={"Deviii"} compstyle={1} /><span className='title-highlight logo'>...</span>
                        </>
                      ) : (
                        // Render content for non-authenticated users
                        <>
                            <span className='title-highlight'>Welcome</span> to the <span className='title-highlight'>World</span> of <RandomShuffleText text={"Deviii"} compstyle={1} /><span className='title-highlight logo'>...</span>
                        </>
                        
                        
                    )}  
                  
              </h1>
              <p className='tag'> -------------------Devi Art Factory------------------- </p>
              {/* <p className='tag'><RandomShuffleText text={"-------------------Devi Art Factory-------------------"} compstyle={2} /></p> */}
         
                


              
            </div>
        </div>
  )
}

export default Home