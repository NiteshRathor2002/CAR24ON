import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
 
  return (
    <div>
    
   <div className=" d-flex justify-content-between bg-primary  shadow-sm p-lg-2">
    <Link to='/' className='text-decoration-none text-light ms-2 me-3 call'>Need help? <i className="bi bi-telephone-fill"></i> Call:7065603126</Link>
    <Link to='Register' className='text-decoration-none text-light me-2 call'><i className="bi bi-person-circle"></i> Login/Register</Link> 
   </div>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
  <img src={logo} alt='img' className='logo me-2'/>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/Navabout'>About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/Contact'>Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/NavServices'>Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/Navoffers'>Cars</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Header;
