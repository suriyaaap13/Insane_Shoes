import React, { useState } from 'react'

export default function Color(props) {

    if(props.color){
        return (
            <>
              <div className='col-4 d-flex justify-content-between'>
                    
                    <button className='border border-dark d-flex justify-content-center align-items-center text-primary' value="white" style={{width: "2rem", height: "2rem", backgroundColor: "white"}}>
                        <i className="fa-solid fa-check"></i>
                    </button>
                    
                    <button onClick={props.changeColor} className='border border-dark d-flex justify-content-center align-items-center text-primary' style={{width: "2rem", height: "2rem", backgroundColor: "red"}}></button>
                </div>
            </>
        );
    }else{
        return ( 
        <>
            <div className='col-4 d-flex justify-content-between'>
                
                <button onClick={props.changeColor} className='border border-dark d-flex justify-content-center align-items-center text-primary' value="white" style={{width: "2rem", height: "2rem", backgroundColor: "white"}}>
                    
                </button>
                
                <button  className='border border-dark d-flex justify-content-center align-items-center text-primary' style={{width: "2rem", height: "2rem", backgroundColor: "red"}}>
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>
        </>
        );
    }
  
}
