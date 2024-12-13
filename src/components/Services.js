import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
function Services() {
  return (
    <>
      <div className="container-fluid p-3">
        <div className='container'>
            <h4 className='text-center text-primary'>See Our</h4>
            <h2 className='text-center'>Popular Services</h2>
            <div className=' d-lg-flex d-md-flex gap-2 mt-5'>
                < div className='  card  p-2 mb-2'><i className="bi bi-geo-alt-fill text-primary fs-3 mb-2"></i>
                <h4 className=''>City transfer</h4>
                <p className='text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Praesentium laborum dolorem amet vitae veritatis excepturi totam asperiores modi quas numquam?</p>
            </div>
            <div className=' card p-2 mb-2'> <i className ="bi bi-house-door-fill text-primary fs-3 mb-2"></i>
            <h4 className=''>Whole City tour</h4>
            <p className='text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Praesentium laborum dolorem amet vitae veritatis excepturi totam asperiores modi quas numquam?</p></div>
        <div className=' card p-2 mb-2'><i class="bi bi-signpost-2-fill text-primary fs-3 mb-2"></i>
        <h4 className=''>Unlimited Miles Car Rental</h4>
        <p className=' text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Praesentium laborum dolorem amet vitae veritatis excepturi totam asperiores modi quas numquam?</p></div>      
    </div>
    <div className='d-lg-flex d-md-flex gap-2 mt-2'>
    <div className=' card p-2 mb-2'><i className="bi bi-stopwatch-fill text-primary fs-3 mb-2"></i>
        <h4 className=''>Easy And Fast Bookings</h4>
        <p className=' text-black-50 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Praesentium laborum dolorem amet vitae veritatis excepturi totam asperiores modi quas numquam?</p></div> 
             <div className=' card p-2 mb-2'><i className="bi bi-geo-alt-fill text-primary fs-3 mb-2"></i>
        <h4 className=''>Many Pickup Locations</h4>
        <p className=' text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Praesentium laborum dolorem amet vitae veritatis excepturi totam asperiores modi quas numquam?</p></div> 
             <div className=' card p-2 mb-2'><i class="bi bi-airplane-engines-fill text-primary fs-3 mb-2"></i>
        <h4 className=''>Airpot Transfer</h4>
        <p className=' text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Praesentium laborum dolorem amet vitae veritatis excepturi totam asperiores modi quas numquam?</p></div> 
    </div>
        </div>
      </div>
    </>
  )
}

export default Services
