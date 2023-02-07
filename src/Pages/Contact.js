import React from 'react'
import './Contact.css'

const Contact = () => {

  return (
    <div>
<div className="contact-details-container">
        
        <h3 class='text'>Contact</h3>
  <form>

    <input type="text" id="fname" name="firstname" placeholder="Enter Your name"/>
    <input  type="text" id="lname" name="lastname" placeholder="Enter Your email address"/>
    <textarea id="w3review" name="w3review" rows="8" cols="50"></textarea>

  </form>
<button className='btn'>Submit</button>
</div>


<div class="card">

  <div class="container">
    <h4><b>How can you help?</b></h4> 
    <h5><b>Call us</b></h5> 
    <p>+880123456789</p>
    <h5><b>Location</b></h5> 
    <p>+880123456789</p>
    <h5><b>Head office hours</b></h5> 
    <p><span>sun-thu</span>9am - 5pm</p>
    
    <p><span>sun-thu</span>9am - 5pm</p>

  </div>
</div>
    </div>
  )
}

export default Contact