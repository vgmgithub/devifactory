import React, { useEffect, useState } from 'react';
import ContactTable from './ContactTable';
import axios from 'axios'; 
const Booking = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

    const [contactData, setContactData] = useState([]);
    const toggleContact = async(contactId) => {

        try {
            await axios.put(`http://${BASE_URL}:5000/api/toggle-noted/${contactId}`)
                    window.location.reload()
                
            // Update the state or re-fetch the contact list as needed
          } catch (error) {
            console.error('Error toggling noted field:', error);
          }
        // Find the contact in the data by ID and toggle its status
        // const updatedContacts = contactData.map((contact) =>
        //   contact.id === contactId
        //     ? { ...contact, active: !contact.active }
        //     : contact
        // );
          
        // setContactData(updatedContacts); // Update the contact data
        // console.log(contactData)
      };
  useEffect(() => {
    // Fetch contact data from your backend API
    fetch('http://localhost:5000/api/contacts') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setContactData(data); // Assuming the data is an array of contacts
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
      <>
          <h2 className='deviborder'>Bookings Enquiry</h2><br /><br /><br />
          {/* <h2 className='deviborder'>Services</h2><br /><br /><br /> */}
          
        <div className='row'>
            <div className='col-md-12'>
                <div className='row'>
                    {/* React Table Starts*/}
                      
                    <ContactTable data={contactData}  toggleContact={toggleContact}/>

                    {/* React Table Ends*/}
                </div>
                  
            </div>
              
                 
        </div>
                 
        
      </>
  )
}

export default Booking
