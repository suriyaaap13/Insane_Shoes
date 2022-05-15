import React from 'react'

export default function Product(props) {
  return (
    <>
        {/* Section 2 */}
        <div className='col-md-8'>
            {/* Heading */} 
            <div className='shadow p-5 mb-3 bg-light rounded'>
                {/* shop and Shop Icon */}
                <div className='d-flex justify-content-between align-items-enter'>
                <div className='fs-3'>
                    Shop
                </div>
                {/* Shop Logo */}
                <div className='text-dark'>
                    <i className="fa-solid fa-shop fa-2x"></i>
                </div>
            </div>
            {/* card Container */}
            <div className='py-4 w-100 d-flex justify-content-around'>
                {/* Card */}
                <div className="card" onClick = {props.tab} style={{width: "14rem", cursor: "pointer"}}>
                    {/* Card Image */}
                    <img className="card-img-top" src={require('../shoe2.png')} alt="Card image cap"/>
                    <div className="card-body">
                    {/* Name of the Shoe */}
                    <h5 className='card-title'>
                        KSL 01
                    </h5>
                    {/* Cost and ratings */}
                    <div className='card-text d-flex justify-content-between align-items-center'>
                        <small>Rs. 2000/-</small>
                        <small>ratings</small>
                    </div>
                    </div>
                </div>
                {/* Card */}
                <div className="card" onClick = {props.tab} style={{width: "14rem", cursor: "pointer"}}>
                    {/* Card Image */}
                    <img className="card-img-top" src={require('../shoe2.png')} alt="Card image cap"/>
                    <div className="card-body">
                    {/* Name of the Shoe */}
                    <h5 className='card-title'>
                        KSL 01
                    </h5>
                    {/* Cost and ratings */}
                    <div className='card-text d-flex justify-content-between align-items-center'>
                        <small>Rs. 2000/-</small>
                        <small>ratings</small>
                    </div>
                    </div>
                </div>
                {/* Card */}
                <div className="card" onClick = {props.tab} style={{width: "14rem", cursor: "pointer"}}>
                    {/* Card Image */}
                    <img className="card-img-top" src={require('../shoe2.png')} alt="Card image cap"/>
                    <div className="card-body">
                    {/* Name of the Shoe */}
                    <h5 className='card-title'>
                        KSL 01
                    </h5>
                    {/* Cost and ratings */}
                    <div className='card-text d-flex justify-content-between align-items-center'>
                        <small>Rs. 2000/-</small>
                        <small>ratings</small>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div> 
    </>
  )
}
