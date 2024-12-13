import React from "react";
import "./Home.css";
import homepage from "../assets/homepage.jpg";
import choosecar from "../assets/img2.jpg";
import About from "../components/About.js";
import Services  from "../components/Services.js";
import Driver from "../components/Driver.js";
import Reviews from "../components/Reviews.js";
import Footer from "../components/Footer.js";
import Topoffers from "../components/Topoffers.js";




function Home() {
  return (
    <>
      <div className="fluid-container">
        <div className="homepage  ">
          <img src={homepage} alt="Homes" className="img-fluid hel" />
        </div>
      </div>
      <div className="container-fluid bg-white ">
        <div className="container bg-light search-car border border-secondary rounded-3 ">
          <div className="row">
            <div className="col-lg-4 p-0">
              <img src={choosecar} alt="Homes" className="img-fluid ms-lg-1 mt-sm-1 rounded-3" />
              
            </div>
            <div className="col-lg-8 d-flex justify-content-center align-items-center mt-3 mb-2 ">
            <form id="myForm" action="" method="post">
            <div class="row align-items-end">
            <div class="col-lg-3 col-md-3 mb-3">
                <label class="form-label " name="cartype">Choose Car type</label>
                <select class="form-select shadow-none" required>
                  <option selected>Open this select menu</option>
                  <option value="1">Yamaha</option>
                  <option value="2">Audi</option>
                  <option value="3">Thar</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-3 mb-3">
                <label class="form-label " name="Budget">Budget</label>
                <select class="form-select shadow-none" required>
                  <option selected>Open this select menu</option>
                  <option value="1">50$-100$</option>
                  <option value="1">100$-150$</option>
                  <option value="2">150$-250$</option>
                  <option value="3">250$-more</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-3 mb-3 position-relative">
                <label class="form-label " name="pickup">Pickup Location</label>
                <input type="text" class="form-control shadow-none" placeholder="text here.." required/>
              </div>
              <div class="col-lg-3 col-md-3 mb-3">
                <label class="form-label " name="Pickupdate">Pickup Time</label>
                <input type='time' class="form-control shadow-none" placeholder="MM/DD/YYYY" onfocus="(this.type='date')"/>
              </div>
              <div class="col-lg-3 col-md-3 mb-3">
                <label class="form-label " name="dropoff">Dropoff location</label>
                <input type="text" class="form-control shadow-none"placeholder="text here.." required/>
              </div>
              
              <div class="col-lg-3 col-md-3 mb-3">
                <label class="form-label " name="dropofftime">Dropoff Time </label>
                <input type='time' class="form-control shadow-none"placeholder="10:30 AM"/>
              </div>
             
              <div class="col-lg-3 col-md-3 mb-lg-3 mt-2 ">
                <button class="btn btn-primary text-white shadow-none custom-bg w-50" >Find Car</button>
              </div>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Services/>
      <Topoffers/>
      <Driver/>
      <Reviews/>
      <Footer/>
    
      
    </>
  );
}

export default Home;
