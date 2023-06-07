import React from 'react'
import Hero from '../Components/Hero'
//import Picture from '../Assets/Picture.jpg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
  return (


    <>
    
    <Navbar/>
    
   
    {/* image={Picture}*/}  

        <Hero cName="hero" 
        title="Unlock Efficient Transportation"
        text="Enhance Your Public Transport Experience"/>

    <Footer/>
    
    </>
  
  )
}

export default Home
