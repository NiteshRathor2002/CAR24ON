import React from 'react';
import './Driver.css';
import img4 from '../assets/img4.jpg';
import toyoto from '../assets/toyoto.png';

function Driver() {
  return (
    <>
      <div className='container-fluid driver'style={{height:'',
      width:'100%',backgroundImage:`url(${img4})`,backgroundPosition:'center'
      }}>
        <div className='row'>
            <div className='col-lg-6'>
                <img src={toyoto} alt='img' className='img-fluid'/>
            </div>
              <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column'>
                <h2 className='text-light mb-3'>Do You Want To Earn With Us?So Don't Be Late.</h2>
                <button className='btn btn-success mb-3'>Become a Driver</button>
              </div>
        </div>

      </div>
    </>
  )
}

export default Driver
