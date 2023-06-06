import React from 'react';
import MapFields from './MapFields';
import Navbar from './Components/Navbar';
import {HashRouter,Routes ,Route} from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Search from './Routes/Search';


function App()
{
  return(

    <>

   <HashRouter>

          <Navbar/> 
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/search' element={<Search/>}/>
          </Routes>
 
  </HashRouter>
  </>
  );
}
export default App;
