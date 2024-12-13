import React, { useEffect, useState } from 'react';
import './Topoffers.css';
import {Link} from 'react-router-dom'
function Topoffers() {
// State to hold the data fetched from the JSON file
  const [records, setRecords] = useState([]);
  // useEffect is used to perform side effects (like fetching data) after the component is rendered
  useEffect(() => {
     // Fetch the JSON file from the 'public' folder
    fetch('/TopCarsoffers.JSON')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
          // Parse the JSON response into a JavaScript object
        return response.json();
      })
      .then((data) => {
        console.log('Data fetched:', data); // Log the fetched data for debugging
        setRecords(data); // Update the `records` state with the fetched data

      })
      .catch((err) => console.error('Error fetching data:', err)); // Catch and log any errors that occur during the fetch
    }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="container mt-5">
       <h4 className="text-center text-primary">Come with</h4>
       <h3 className="text-center mb-5">Hot Offers</h3>
       <div className="container d-flex flex-wrap justify-content-center   gap-2 mb-3">
        {records.map((records)=>
        <div className="card  text-center "key={records.id} style={{maxWidth:"18rem",minWidth:"15rem"}}>
         <div className=" "> <img src={records.image} alt={records.name} className='card-image mt-2'/></div>
          <div class="card-body ">
    <h5 class="card-title text-primary">{records.name}</h5>
    <p class="card-text"><strong>Price: $</strong>{records.price} /Per Day</p>
    <p class="card-text"><strong>model: </strong>{records.model}</p>
    <p class="card-text"><strong>Color: </strong>{records.color}</p>
    <p class="card-text"><strong>Mileage: </strong>{records.mileage}KM</p>
    <p class="card-text"><strong>AC :</strong>{records.ac}</p>
   <button className='btn btn-primary w-50 '>
                  <Link to={`/Rent/${records.id}`} className='text-decoration-none text-light '>Details</Link>
                </button></div>


    
 
        </div>
        )}
       </div>

      
    
    </div>
  );
}

export default Topoffers;
