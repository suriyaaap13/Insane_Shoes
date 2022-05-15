import React, {useState} from 'react'
import Color from './Color';
import ProductImage from './ProductImage';
import Size from './Size';

export default function Design(props) {
  const [FB, setFB] = useState(true);
  const [back, setBack] = useState(true);
  const [sole, setSole] = useState(true);
  const [size, setSize] = useState("7");

  function handleClickFB(){
    setFB(!FB);
  }

  function handleClickBack(){
    setBack(!back);
  }

  function handleClickSole() {
    setSole(!sole);
  }

  function handleClickSize(value) {
    setSize(value);
    console.log("Hello World");
  }

  function handleA2C(){
    props.onAdd({
      fb: FB,
      back: back,
      size: size
    })

  }

  const customStyle ={width: "40rem", height: "40rem"}
  return (
    <>
    <div className='col-md-10'>
      <div className='shadow p-4 mb-3 bg-light rounded'>
          {/* Back Icon and Page name */}
          <div className='d-flex justify-content-start align-items-enter'>
            <div className='fs-4 mx-3' onClick={props.tab} style={{cursor: "pointer"}}>
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className='fs-4'>
              Your Design Space
            </div>
          </div>
          
          <div className='py-4 px-4 row'>
            <div className='col-md-8'> 
              {/* Product Image */}
              <ProductImage fb={FB} back={back} style={customStyle} />
            </div>
            <div className='col-md-4 p-2'>
              {/* Product Deatails */}
              <div className='py-2'>
                <div className='fs-3'>
                  KSL  01
                </div>
                <small>
                  by KICKUP
                </small>
              </div> 
              {/* Finacial Details */}
              <div className='py-3'>
                <div className='fs-5'>
                  Rs.2000/-
                </div>
                <small>
                  Get an exculsive 20% off shopping with HDFC Bank
                </small>
              </div>
              {/* Product Design Choosing section */}
              <div className='py-4'>
              {/* Front and Back */}
                <div className='row py-2'>
                  <div className='col-5 fs-5'>
                    Front & Back
                  </div>
          
                  <Color color={FB} changeColor={handleClickFB}/>
                  
                </div>
                {/* Middle */}
                <div className='row py-2'>
                  <div className='col-5 fs-5'>
                    Middle
                  </div>
                  
                  <Color color={back} changeColor = {handleClickBack} />
                    
                </div>
                {/* Sole */}
                <div className='row py-2'>
                  <div className='col-5 fs-5'>
                    Sole
                  </div>
                  
                  <Color color={sole} changeColor = {handleClickSole} />
                  
                </div>
                {/* Size */}
                <Size shoeSize={size} editSize={handleClickSize} />
                {/* Add to cart Button */}
                <div className='d-flex justify-content-center align-items-center py-5'>
                  <div className='btn btn-lg btn-outline-primary' onClick={handleA2C}>
                    Add to Cart
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
      </div>
      
    </div>
      
    </>
  )
}
