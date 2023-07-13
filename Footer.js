import React from 'react'
import './Header.css'

export default function Footer() {
  return (
    <div>
          <div className='footer'>


<div className='footer-container'>
    <div className='footer-icons'>
        <span className='icon1'>
            <i className="far fa-shield"></i>
            <h6 className='icon-text'>1 Year Warrenty</h6>
        </span>

        <span className='icon2'>
          <i className="fas fa-exchange-alt"></i>
            <h6 className='icon-text'>Easy Return</h6>
        </span>

        <span className='icon3'>
          <i className="far fa-shipping-fast"></i>
            <h6 className='icon-text'>Fast Delivery</h6>
        </span>
    </div>

    <div className='socials'>
        <h3>Connect with us</h3>
        <span className='social-icon'>
            <a href='#'><i className="fab fa-instagram"></i></a>
            <a href='#'><i className="fab fa-facebook"></i></a>
            <a href='#'><i className="fab fa-twitter"></i></a>
        </span>
    </div>

    <div className='us'>
        <h3>Get To Know Us</h3>
        <span className='us-links'>
        <a href='#'>About Us</a> &nbsp; &#124; &nbsp;
        <a href='#'>Jobs</a> &nbsp; &#124; &nbsp;
        <a href='#'>Terms &#38; Condition </a> &nbsp; &#124; &nbsp;
        <a href='#'>Privacy Policy</a> 
        </span>
    </div>

    <div className='copyright'>
        <p>&copy; 2012-2023 Myshop.com</p>
    </div>
</div>
</div>
    </div>
  )
}
