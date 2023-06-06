import React from 'react';
import './HeroStyle.css';
//import Picture from '../Assets/Picture.jpg';

const Hero = (props) => {
  return (
    <>
    {/* <div className={props.cName}>
    <img src={props.image} alt="My image"/>
    </div> */}

<div className='Hero-Text'>
    <center><h1>{props.title}</h1></center>
   <center><p>{props.text}</p></center> 
    
</div>

    </>
    
 )}

export default Hero
