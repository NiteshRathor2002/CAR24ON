import React from 'react'
import About from '../components/About.js';
import Footer from './Footer.js';
import img4 from '../assets/img4.jpg';
function Navabout() {
  return (
    <div>
        <div className='container-fluid d-flex justify-content-center align-items-center navsection'style={{
      width:'100%',backgroundImage:`url(${img4})`,backgroundPosition:'center'
      }}>
        <h1 className='text-white'>About </h1>

        </div>
      <About/>
      <Footer/>
    </div>
  )
}

export default Navabout
