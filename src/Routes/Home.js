import React from 'react'
//import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Picture from '../Assets/Picture.jpg';

const Home = () => {
  return (
    <div>
        {/* <Navbar/> 
        image={Picture}*/}
        

        <Hero cName="hero" 
        title="Unlock Efficient Transportation"
        text="Enhance Your Public Transport Experience"/>

    </div>
  )
}

export default Home
