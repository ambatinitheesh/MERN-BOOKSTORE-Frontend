import React from 'react'
import './footer.css'
import footer_logo from '../Assests/logo.png'
import insta from '../Assests/instagram_icon.png'
import pin from '../Assests/pintester_icon.png'
import wap from '../Assests/whatsapp_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer-logo'>
        <img src={footer_logo} alt=""/>
        <p>ReadIt Potter</p>
       </div> 
       <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
       </ul>
       <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={insta} alt=""/>
        </div>
        <div className='footer-icons-container'>
            <img src={pin} alt=""/>
        </div>
        <div className='footer-icons-container'>
            <img src={wap} alt=""/>
        </div>
       </div>
       <div className='footer-copyright'>
        <hr/>
        <p>Copyright @2024-All Rights Reserved</p>
    </div>
    </div>
  )
}
