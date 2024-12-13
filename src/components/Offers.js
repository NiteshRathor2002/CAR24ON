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
      <div className="offers-div d-flex flex-wrap justify-content-center gap-2">
        {filteredRecords.map((data) => (
          <div key={data.id} className="offer-item card p-2 text-center"style={{maxWidth:"18rem",minWidth:"15rem"}}>
            <div className="h-25">
              <img src={data.image} alt={data.name} className="card-image mt-2" />
            </div>
            <div>
              <h4 className='text-primary'>{data.name}</h4>
              <p><span className='fw-bold'>Price: $</span>{data.price}/per Day</p>
              <p><span className='fw-bold'>Color:</span> {data.color}</p>
              <p><span className='fw-bold'>AC:</span> {data.ac ? 'Yes' : 'No'}</p>
              <p><span className='fw-bold'>Model:</span> {data.model}</p>
              <p><span className='fw-bold'>Average:</span> {data.mileage} KM</p>
             
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
