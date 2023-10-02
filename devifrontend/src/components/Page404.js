// src/components/Page404.js
import React from 'react';
import RandomShuffleText from './RandomShuffleText'
 

const Page404 = () => {

    

 
    return (
        <>
        <div className='body'>
            <div className="contact-form">
                    <div className="container mt-5">
                        <center>
                            <RandomShuffleText text={"404"} compstyle={1} />  <span className='title-highlight' style={{fontSize:"55px"}}> Page </span> <RandomShuffleText text={"Not Found"} compstyle={3} /> 
                        </center>
                    </div>
            </div>
            
        </div>
     
        </>
  );
};

export default Page404;
