import React from 'react'

export default function ProductImage(props) {

    const customStyle = props.style

    if(props.fb===true&&props.back===true){
        return (<img src={require('../shoes/shoe1.png')} style={customStyle} alt='Product Image'/>);
    }else if(props.fb===false&&props.back===true){
        return <img src={require('../shoes/shoe2.png')} style={customStyle} alt='Product Image'/>
    }else if(props.fb===true&&props.back===false){
        return <img src={require('../shoes/shoe3.png')} style={customStyle} alt='Product Image'/>
    }else {
        return <img src={require('../shoes/shoe4.png')} style={customStyle} alt='Product Image'/>
    }
  
}
