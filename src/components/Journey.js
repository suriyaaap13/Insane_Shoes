import React from 'react';

export default function Journey() {

  // Adding Styles to the image container
  const imgContainer = {
    height: "100%",
    position: "relative",
    overflow: "hidden"
  }
  // Adding Styles to the background Image
  const picture = {
    width: "90em",
    height: "16rem",
    backgroundPosition: "center",
    opacity: "0.9"
  }
  // Adding styles to Text over image
  const header = {
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    height: "fit-content",
    margin: "auto"
  }
  return (
    // ../grasspic.jpg
    <div className='py-2 mw-100 container'>
      {/* Container */}
      <div className='d-flex justify-content-center align-items-center mw-100'>
        <div className='container p-5'>
          {/* Container */}
          <div className='px-5'>
            {/* Image */}
            <div style={imgContainer}>
              <img src={require("../grasspic.jpg")} style={picture}/>
              <div className='text-white fs-1' style={header}>
                <h1>
                  The Journey
                </h1>
              </div>
            </div>
            {/* Info */}
            <div className='text-white py-4 px-5 ' style={{backgroundImage: "linear-gradient(#656565,#000000,#040404)"}}>
              {/* Points */}
              <div className='py-3'>
                <div className='fs-5'>
                  THE ROOTS
                </div>
                <small className=''>
                  Our entire life when we shop, we are limited by choices that are there in a store. We are often on the side where we buy our favourite coloured shoes made by someone else but what if we designned it? What if we could involve in the making of a shoe we want to buy? This little thought sprouted to become what we are tody, KICKSUP:)
                </small>
              </div>

              <div className='py-3'>
                <div className='fs-5'>
                  CHAPTER 1
                </div>
                <small className=''>
                  Understanding the trends in the industry and what the users think when they buy were our top priorities before we moved futher in the building. After weeks of fruitful reasearch, we stepped into the user's shoes and look at what we plant to do. It's a great joy for the users if they are moved in the making. We're heading inot an era of technology and people prefer online shopping to shopping in an outlet.
                </small>
              </div>



              <div className='py-3'>
                <div className='fs-5'>
                  CHAPTER 2
                </div>
                <small className=''>
                  Every milestones begins with a simple step and before KICKSUP sprouted, the team manufactured in small scale with tow users a month. This experience was crucual to our brand as this is our first practical experience. Interacting with the users was the best thing ever. The positive reviews and support from people motivated us to push our limits further.
                </small>
              </div>



              <div className='py-3'>
                <div className='fs-5'>
                  KICKSUP
                </div>
                <small className=''>
                  Here we are made perfect platform for you to involve in the making of a shoe you want to buy! We have evolved ever since we started out. We wish to help you more and make KICKSUP a bigger team. Design your shoe and be a part of our journey!.
                </small>
              </div>
              
              
            </div>
          </div>
          
        </div>
      </div>
      
      
    </div>
  )
}