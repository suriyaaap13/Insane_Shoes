import React from 'react';
import ProductImage from './ProductImage';

export default function CartItem(props) {

  function handleClick(){
    props.onChecked(props.id);
  }


  return (
    <>
      <div className='w-100 mx-2 my-5 py-2 shadow p-3 mb-5 bg-white rounded'>
        <div className='row'>
          {/* Product Image */}
          <div className='col-6'>
            <ProductImage fb={props.fb} back={props.back} style={{width: "5rem", height: "5rem"}}/>
          </div>
          <div className='col-6 '>
            {/* Product Name */}
            <div className='fw-bold'>
              KSL 01
            </div>
            {/* Size */}
            <small>
              Size: {props.size}
            </small>
            {/* Product Cost */}
            <small className='d-block'>Rs. 2000/-</small>
            {/* Delete Product */}
            <div className='text-danger d-flex justify-content-end p-2' onClick={handleClick}>
              <i className="fa-solid fa-trash-can border p-2 shadow bg-white rounded"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
