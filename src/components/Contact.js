import React from 'react'

export default function Contact() {

  const myStyle = {
    backgroundImage: "url('')"
  }

  return (
    <>
      <div className='' >
        {/* Contact Card */}
        <div className='d-flex align-items-center justify-content-center container pt-4' >
          <div className='col-4  bg-warning p-5 shadow p-5 mb-3 bg-white rounded'>
              <div className='d-flex justify-content-center fs-5 '>REACH US AT</div>
              <div className='contact-info px-3 py-2'>
                <div className='contact-info-details px-3 py-2'>
                  <div className='d-flex fs-5'>support@kickup.com</div>
                  <small className='d-flex'>for any technical issue</small>
                </div>
                <div className='contact-info-details px-3 py-2'>
                  <div className='d-flex fs-5'>info@kickup.com</div>
                  <small className='d-flex'>for more information</small>
                </div>
                <div className='contact-info-details px-3 py-2'>
                  <div className='d-flex fs-5'>feedback@kickup.com</div>
                  <small className='d-flex'>send your feedback</small>
                </div>
                <div className='contact-info-details px-3 py-2'>
                  <div className='d-flex fs-5'>jobs@kickup.com</div>
                  <small className='d-flex'>to work with us</small>
                </div>
              </div>
          </div>
          
        </div>
        {/* Stay in Touch display */}
        <div className='d-flex justify-content-center social-icons'>
            <small>stay in touch</small>
        </div>
        {/* Social Icons Display */}
        <div>
          <div className='d-flex justify-content-center social-icons'>
                <a className="p-2" href='/'>
                  <img src={require("../contact/twitter.png")} />
                </a>
                <a className="p-2" href='/'>
                  <img src={require("../contact/insta.png")} />
                </a>
                <a className="p-2" href='/'>
                  <img src={require("../contact/facebook.png")} />
                </a>
          </div>
        </div>
      </div>
      
    </>
    
  )
}
