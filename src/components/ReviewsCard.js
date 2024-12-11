import React from 'react';
import './ReviewsCard.css';

function ReviewsCard(props) {
  return (
    <div className='reviewcard  bg-black text-center rounded-3'>
   <img src={ props.clientimg }alt="reviewer img" className='img-fluid client-img' />
   <h3 className='text-white text-capitalize'>{props.clientname}</h3>
   <p className='text-light-50'>{props.clientreview}</p>
    </div>
  )
}

export default ReviewsCard;
