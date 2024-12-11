import React from 'react';
import {Link}from 'react-router-dom';
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/logo.png';
function Footer() {
  return (
 <div className="container-fluid p-2 bg-light">
       <div className='container'>
      <div className='text-center m-4'> <img src={logo} alt='img' className='footer-logo  '/></div>
      <div className='row'>
        <div className='col-lg-3'>
            <ul className=''>
                <h4 className='text-primary '>Company</h4>
                <li className='footer-nav'><Link to=''className='link'>home</Link></li>
                <li className='footer-nav'><Link to=''className='link'>About</Link></li>
                <li className='footer-nav'><Link to=''className='link'>Blog</Link></li>
                <li className='footer-nav'><Link to=''className='link'>Contact</Link></li>
                <li className='footer-nav'><Link to=''className='link'>Services</Link></li>
            </ul> 
       </div>
       <div className='col-lg-3'>
            <ul className='text-primary'>
                <h4 className=''>Policies</h4>
                <li className='footer-nav'><Link to=''className='link'>Privacy Policies</Link></li>
                <li className='footer-nav'><Link to=''className='link'>Cookies</Link></li>
                <li className='footer-nav'><Link to=''className='link'>terms of use</Link></li>
                <li className='footer-nav'><Link to=''className='link'>Contact</Link></li>
                <li className='footer-nav'><Link to=''className='link'>Services</Link></li>
            </ul> 
       </div>
       <div className='col-lg-3'>
            <ul className='text-primary'>
                <h4 className=''>Help</h4>
                <li className='footer-nav'><Link to=''className='link'>Support</Link></li>
                <li className='footer-nav'><Link to=''className='link'>Cancel your booking</Link></li>
                <li className='footer-nav'><Link to=''className='link'>Refund timelines</Link></li>
            </ul> 
       </div>
       <div className='col-lg-3'>
       
            <ul className='text-primary '>
            <h4 className='text-primary'>Social Links</h4>
               <div className='d-flex flex-row gap-3'>
               <li className='footer-nav'><Link to=''className='link'><i class="bi bi-instagram text-danger fs-4 "></i></Link></li>
                <li className='footer-nav'><Link to=''className='link'><i class="bi bi-facebook text-primary fs-4"></i></Link></li>
                <li className='footer-nav'><Link to=''className='link'><i class="bi bi-twitter text-primary fs-4"></i></Link></li>
               </div>
            </ul> 
       </div>


      </div>
    </div>
 </div>
  )
}

export default Footer
