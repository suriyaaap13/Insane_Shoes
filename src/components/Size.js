import React from 'react'

export default function Size(props) {

    // rest of the size css
    const defaultStyle = {
        width: "2rem", height: "2rem", backgroundColor: "white", cursor: "pointer"
    }
    // Selected size css
    const customStyle = {
        width: "2rem", height: "2rem", backgroundColor: "#ffbb33", cursor: "pointer"
    }
    // function call to change the selected size
    const handleClick = function (event){
        console.log(event.target.value);
        props.editSize(event.target.value);
    }

  return (
    <>
      <div className='py-2'>
        <div className='col-5 fs-5 py-2'>
        Size
        </div>
        <div className='col-7 py-2 d-flex justify-content-between'>
            <button className='border border-dark d-flex justify-content-center align-items-center fw-bold' 
            style={(props.shoeSize==="7")?customStyle:defaultStyle} onClick={handleClick} value="7">7</button>
            <button className='border border-dark d-flex justify-content-center align-items-center fw-bold' 
            style={(props.shoeSize==="8")?customStyle:defaultStyle} onClick={handleClick} value="8">8</button>
            <button className='border border-dark d-flex justify-content-center align-items-center fw-bold' 
            style={(props.shoeSize==="9")?customStyle:defaultStyle} onClick={handleClick} value="9">9</button>
            <button className='border border-dark d-flex justify-content-center align-items-center fw-bold' 
            style={(props.shoeSize==="10")?customStyle:defaultStyle} onClick={handleClick} value="10">10</button>
        </div>
      </div>
    </>
  )
}
