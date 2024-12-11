import React, { useEffect, useState } from 'react';
import './Offers.css';
import { Link } from 'react-router-dom';

function Offers({ company, color, ac }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('/data.JSON')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setRecords(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  // Filter records based on the selected filters
  const filteredRecords = records.filter((car) => {
    return (
      (company === '' || car.name.includes(company)) &&
      (color === '' || car.color === color) &&
      (ac === '' || car.ac === ac) 
    );
  });

  return (
    <div className="container ">
      <div className="offers-div d-flex flex-wrap justify-content-center">
        {filteredRecords.map((data) => (
          <div key={data.id} className="offer-item cars-offers rounded-2 p-3 m-3">
            <div className="h-25">
              <img src={data.image} alt={data.name} className="cars-img h-100" />
            </div>
            <div>
              <h4 className='text-primary'>{data.name}</h4>
              <p><span className='fw-bold'>Price: $</span>{data.price}/per Day</p>
              <p><span className='fw-bold'>Color:</span> {data.color}</p>
              <p><span className='fw-bold'>AC:</span> {data.ac ? 'Yes' : 'No'}</p>
              <div className='row'>
                <div className='col-6'><p><span className='fw-bold'>Model:</span> {data.model}</p></div>
                <div className='col-6'><p><span className='fw-bold'>Average:</span> {data.mileage} KM</p></div>
              </div>
              <div className='d-flex justify-content-center '>
                
                <button className='btn btn-success w-50'>
                  <Link to={`/Rent/${data.id}`} className='text-decoration-none text-light'>Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
