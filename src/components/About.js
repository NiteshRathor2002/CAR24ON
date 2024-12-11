import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img3 from '../assets/img3.png';
import "./About.css";
function About() {
  return (
    <>
     <div className='container-fluid p-3'>
        <div className='container'>
           <div className='row p-lg-3'>
            <div className='col-lg-6'>
            <h3 className='text-primary'>About Us</h3>
            <h2 className=''>Welcome to CAR24ON Car Rent Services</h2>
            <p className='text-black-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, ducimus reiciendis! Asperiores quia aliquid consectetur accusamus ut enim deleniti quae,
                 esse totam repellendus, nihil sint quaerat rem, veritatis a explicabo ducimus doloremque corporis nam ea! Laboriosam expedita molestias blanditiis sint placeat in et
                  ipsa dolorem aut illo! In, aperiam repellendus.</p>
        <div className="row">
            <div className="col-6  d-flex flex-row gap-1 fw-bold">
                <div ><i class="bi bi-check-circle-fill text-primary mb-2"></i> </div>
            24*7 Customer Support Services
            </div>
            <div className="col-6 d-flex flex-row gap-1 fw-bold">
                <div> <i class="bi bi-check-circle-fill text-primary mb-2"></i></div>
            Booking Modifications and Cancellations
            </div>
            <div className="col-6 d-flex flex-row gap-1 fw-bold">
                <div><i class="bi bi-check-circle-fill text-primary mt-2"></i></div>
             Insurance and Protection Options
            </div>
            <div className="col-6 d-flex flex-row gap-1 fw-bold">
            <div><i class="bi bi-check-circle-fill text-primary mt-2"></i></div>
            Multinational Currency Support
            </div>
        </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                <img src={img3} className='img-fluid img3'alt='img3'/>
            </div>
           </div>
        </div>
        </div> 
    </>
  )
}

export default About
