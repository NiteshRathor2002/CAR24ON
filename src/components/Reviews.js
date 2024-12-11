import React, { useRef } from "react";
import ReviewsCard from "./ReviewsCard";
import "./Reviews.css";
import client from '../assets/client.png';

function Reviews() {
  // Use a ref to target the reviews-carousel div
  const carouselRef = useRef(null);

  const btnpressprev = () => {
    const box = carouselRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
    }
  };

  const btnpressnext = () => {
    const box = carouselRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
     // console.log(width);
    }
  };

  return (
    <>
      <div className="mb-5">
        <h3 className="text-center text-primary m-3">Testimonial</h3>

      <div className="container reviews-container">
        <button className="less" onClick={btnpressprev}>
          <p className="rounded-3">&lt;</p>
        </button>
        <button className="greater" onClick={btnpressnext}>
          <p className="rounded-3">&gt;</p>
        </button>
        <div className="reviews-carousel" ref={carouselRef}>
          <ReviewsCard clientimg={client} clientname='Nitesh Rathor'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.' />
          <ReviewsCard clientimg={client} clientname='jyoti Rathor'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          <ReviewsCard clientimg={client} clientname='Nishant Rathor'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          <ReviewsCard clientimg={client} clientname='Sudeep Sharma'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          <ReviewsCard clientimg={client} clientname='Ram'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          <ReviewsCard clientimg={client} clientname='krishna'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          <ReviewsCard clientimg={client} clientname='Rajat'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          <ReviewsCard clientimg={client} clientname='bunty'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          <ReviewsCard clientimg={client} clientname='honey'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          <ReviewsCard clientimg={client} clientname='sunil'clientreview='I’ll definitely rent here again instead of using the usual car rental companies.'/>
          
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Reviews;
