import React from 'react'
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavbarStyles.css';


export default function Navbar(props) {

    return (

        <nav className="NavbarItems">
            <h1 className="Navbar-logo">AsaanRasta</h1>

            <ul className="Navbar-menu">
                {MenuItems.map((items, index) =>{
                    return(
                            <li key={index}>
                            <Link  className={items.cName}  to ={items.url}><i className={items.icon}></i>{items.title}</Link>
                            </li>
                )})}

               
            </ul>
           
      
        </nav>

    
  )
}
