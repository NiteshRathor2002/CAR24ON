import React from 'react';
import Footer from './Footer';
import Services from './Services';
import img4 from '../assets/img4.jpg';

function NavServices() {
  return (
    <div>
       <div className='container-fluid d-flex justify-content-center align-items-center navsection'style={{
      width:'100%',backgroundImage:`url(${img4})`,backgroundPosition:'center'
      }}>
        <h1 className='text-white'>Services </h1>

        </div>
        <Services />
        <Footer />
    </div>
  )
}

export default NavServices
