import React from 'react'

export default function Team() {
  return (
    <>
      <div className= "d-flex justify-content-center align-items-center pt-3">
        <div className='fs-4 fw-bold'>
          Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great :)
        </div>
      </div>
      {/* Team Card container */}
      <div className='d-flex align-items-center justify-content-around mx-5 py-5 px-5'>
        {/* Team Member Card */}
        <div className="card" style={{width: "12rem"}}>
          {/* Team member Image */}
          <img src={require('../team/zidane.jpg')} style={{height: "11.5rem"}} className="card-img-top" alt="..."/>
          {/* Team rest Half */}
          <div className="px-3 py-4 ">
            {/* Team Member Info */}
            <div className='pb-4'>
              <div className="d-flex align-items-center justify-content-center fw-bold">Zidane</div>
              <div className="d-flex align-items-center justify-content-center lh-sm">Management & Lead</div>
            </div>
            {/* Team Members Social Icons */}
            <div className='d-flex justify-content-around mx-4'>
              <img src={require('../team-social-icons/linkedin.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/medium.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/facebook@2x.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
            </div>
            
          </div>

        </div>


        {/* Team Member Card */}
        <div className="card" style={{width: "12rem"}}>
          {/* Team member Image */}
          <img src={require('../team/tonikroos.jpg')} style={{height: "11.5rem"}} className="card-img-top" alt="..."/>
          {/* Team rest Half */}
          <div className="px-3 py-4 ">
            {/* Team Member Info */}
            <div className='pb-4'>
              <div className="d-flex align-items-center justify-content-center fw-bold">Toni Kroos</div>
              <div className="d-flex align-items-center justify-content-center lh-sm">Product Developer</div>
            </div>
            {/* Team Members Social Icons */}
            <div className='d-flex justify-content-around mx-4'>
              <img src={require('../team-social-icons/linkedin.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/medium.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/facebook@2x.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
            </div>
            
          </div>

        </div>

        {/* Team Member Card */}
        <div className="card" style={{width: "12rem"}}>
          {/* Team member Image */}
          <img src={require('../team/ikercasillas.jpg')} style={{height: "11.5rem"}} className="card-img-top" alt="..."/>
          {/* Team rest Half */}
          <div className="px-3 py-4 ">
            {/* Team Member Info */}
            <div className='pb-4'>
              <div className="d-flex align-items-center justify-content-center fw-bold">Iker Casillas</div>
              <div className="d-flex align-items-center justify-content-center lh-sm">Marketing Strategy</div>
            </div>
            {/* Team Members Social Icons */}
            <div className='d-flex justify-content-around mx-4'>
              <img src={require('../team-social-icons/linkedin.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/medium.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/facebook@2x.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
            </div>
            
          </div>

        </div>

        {/* Team Member Card */}
        <div className="card" style={{width: "12rem"}}>
          {/* Team member Image */}
          <img src={require('../team/james.jpg')} style={{height: "11.5rem"}} className="card-img-top" alt="..."/>
          {/* Team rest Half */}
          <div className="px-3 py-4 ">
            {/* Team Member Info */}
            <div className='pb-4'>
              <div className="d-flex align-items-center justify-content-center fw-bold">James</div>
              <div className="d-flex align-items-center justify-content-center lh-sm">Product designer</div>
            </div>
            {/* Team Members Social Icons */}
            <div className='d-flex justify-content-around mx-4'>
              <img src={require('../team-social-icons/linkedin.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/medium.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/facebook@2x.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
            </div>
            
          </div>

        </div>

        {/* Team Member Card */}
        <div className="card" style={{width: "12rem"}}>
          {/* Team member Image */}
          <img src={require('../team/christiano.jpg')} style={{height: "11.5rem"}} className="card-img-top" alt="..."/>
          {/* Team rest Half */}
          <div className="px-3 py-4 ">
            {/* Team Member Info */}
            <div className='pb-4'>
              <div className="d-flex align-items-center justify-content-center fw-bold">Christiano</div>
              <div className="d-flex align-items-center justify-content-center lh-sm">Financial operations</div>
            </div>
            {/* Team Members Social Icons */}
            <div className='d-flex justify-content-around mx-4'>
              <img src={require('../team-social-icons/linkedin.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/medium.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
              <img src={require('../team-social-icons/facebook@2x.png')} style={{height: "1.5rem", width: "1.5rem"}}/>
            </div>
            
          </div>

        </div>
        
        
      </div>
      
        
        
       
        
        
      <div className='d-flex justify-content-center align-items-center fs-4 fw-bold'>
          and You! ;)
      </div>
    </>
  )
}
