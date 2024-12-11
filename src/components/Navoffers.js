import React, { useState } from 'react';
import Offers from '../components/Offers.js';
import './Navoffers.css';
import Footer from './Footer.js';

function Navoffers() {
  // State for filters
  const [company, setCompany] = useState('');
  const [color, setColor] = useState('');
  const [ac, setAc] = useState('');

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2  mt-5 d-flex align-items-center flex-column '>
          <h3 className='text-primary'>Filters Cars:</h3>
          <div className='mb-3 '>
            <p className='fw-bold'>Company:</p>
            <select
              className="rounded-2 select "
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            >
              <option value="">All</option>
              <option value="Toyota">Toyota</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Audi">Audi</option>
            </select>
          </div>
          <div className='mb-3'>
            <p className='fw-bold'>Colors:</p>
            <select
              className="rounded-2 select"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="">All</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Silver">Silver</option>
            </select>
          </div>
          <div className='mb-3'>
            <p className='fw-bold'>Air Conditioning:</p>
            <select
              className="rounded-2 select"
              value={ac}
              onChange={(e) => setAc(e.target.value)}
            >
              <option value="">All</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className='col-lg-10 '>
          {/* Pass filters as props to the Offers component */}
          <Offers company={company} color={color} ac={ac} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Navoffers;
