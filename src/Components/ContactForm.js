import React from 'react';
import "./ContactForm.css";

function ContactForm() {
  return (
    <>
    <div className='container'>
      <h2>Contact Us</h2>
     
      <div className='contact-form'>

        {/* <!--First Grid--> */}
        <div>
          <i class="fa-solid fa-house"></i><span className='form-info'>Punjab University of Information Technology, Quaid-e-Azam Campus,Lahore</span>
          <div><i class="fa-solid fa-phone"></i><span className='form-info'>+92-331-8713122</span></div>
          <i class="fa-sharp fa-solid fa-envelope"></i><span className='form-info'>isfaakram123@gmail.com</span>
        </div>

        {/* <!--Second Grid--> */}
        <div className='form-info'>
          <form action='https://formspree.io/f/xgebjpbl' method='POST'>
              <input type='text' name='username' placeholder='First Name'  required />
              <input type='text' name='username1' placeholder='Last Name' required />
              <input type='email' name='email' placeholder='Email'  required />
              <textarea name='message' placeholder='Type your Message...' rows="6" cols="30" autoComplete='off' required></textarea>
              
              <button className='submit'>Send Message</button>
            
        </form>
        </div>











      </div>
    </div>



</>

  )
}

export default ContactForm
