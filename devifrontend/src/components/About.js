import React from 'react'

const About = () => {
    return (
      <>
        <h2 className='deviborder'> Hi All..</h2><br />
        <p>Hope, you are doing well !</p>

        <p>
                "Welcome to Devi Art Factory, where creativity knows no bounds! We are passionate about painting and artistry, and our Instagram page is a canvas for sharing our artistic journey with the world. Our mission is to spread the joy of colors and imagination through our handcrafted artworks. Whether it's vibrant landscapes, intricate portraits, or abstract masterpieces, we pour our hearts into every creation. Join us on this artistic adventure, where every brushstroke tells a unique story. If you're looking for custom artworks, collaborations, or other creative services, feel free to reach out. Let's turn your ideas into beautiful works of art. Thank you for being a part of our creative community! <br /><br />
                and, i am Saranya Devi Kuttalam CA, the Devi behind the scene who pursive ART for life and Audit for living !"
            </p>
            <br></br>
            <center>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-responsive rounded-circle ownerprof' src='/images/devica.jpeg' alt='devi' />
                        <p className='scantext ownerlabel' >ARTIST</p>
                        <h6 className='scantext'>CA SARANYA DEVI KUTTALAM</h6>
                    </div>
                    <div className='col-md-6'>
                        <div className='scandiv'>
                            <h6 className='scantext'>SCAN BELOW QR TO CHECK MY ART FACTORY INSTA PAGE</h6>
                            <br></br>
                            <img src="/images/insta_qr.png" className='instaqr' alt='scanner'/>
                        </div>
                    </div>
                </div>
                
                
            </center>
      </>
    
  )
}

export default About