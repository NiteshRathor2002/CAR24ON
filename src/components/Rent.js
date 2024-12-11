import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Rent.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Footer from "./Footer";

function Rent() {
    const { id } = useParams(); // Extract the car ID from the route
    const navigate = useNavigate(); // For navigation after payment
    const [carDetails, setCarDetails] = useState(null); // State to store the selected car details

    useEffect(() => {
        // Fetch the data from your JSON or API
        fetch('/data.JSON')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Filter the data to find the car with the matching ID
                const selectedCar = data.find((car) => car.id === parseInt(id));
                setCarDetails(selectedCar); // Update the state with the selected car details
            })
            .catch((err) => console.error('Error fetching data:', err));
    }, [id]);

    if (!carDetails) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    }

    // Define the validation schema using Yup
    const validationSchema = Yup.object({
        firstname: Yup.string()
            .min(2, "First name must be at least 2 characters")
            .max(50, "First name can't exceed 50 characters")
            .required("First name is required"),
        lastname: Yup.string()
            .min(2, "Last name must be at least 2 characters")
            .max(50, "Last name can't exceed 50 characters")
            .required("Last name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: Yup.string()
            .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
            .required("Contact number is required"),
        pickuplocation: Yup.string().required("Pickup location is required"),
        destination: Yup.string().required("Destination is required"),
        pickupdate: Yup.date()
            .required("Pickup date is required")
            .min(new Date(), "Pickup date cannot be in the past"),
        pickuptime: Yup.string().required("Pickup time is required"),
    });

    // Handle Razorpay payment
    const handlePayment = (values) => {
        const options = {
            key: "rzp_test_NnzNT03XkhLIVm", // Replace with your Razorpay Key ID
            amount: carDetails.price * 100, // Amount in paisa (INR * 100)
            currency: "INR",
            name: "CAR24ON",
            description: "Car Booking Payment",
            handler: function (response) {
                alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                console.log(response);
                navigate('/success'); // Redirect to a success page or another route
            },
            prefill: {
                name: `${values.firstname} ${values.lastname}`,
                email: values.email,
                contact: values.phone,
            },
            theme: {
                color: "#3399cc",
            },
        };
        if (!carDetails || !carDetails.price) {
            alert("Car details are missing or incomplete. Please try again later.");
            return;
        }
        
        const rzp = new window.Razorpay(options);
rzp.on('payment.failed', function (response) {
    alert("Payment failed. Reason: " + response.error.description);
    console.error("Razorpay Error:", response.error);
});
rzp.open();
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={carDetails.image} alt={carDetails.name} className="img-fluid mb-3" />
                    </div>
                    <div className="col-lg-6 p-3">
                        <h1>{carDetails.name}</h1>
                        <p><strong>Price:</strong> ${carDetails.price} per day</p>
                        <p><strong>Color:</strong> {carDetails.color}</p>
                        <p><strong>AC:</strong> {carDetails.ac ? 'Yes' : 'No'}</p>
                        <p><strong>Model:</strong> {carDetails.model}</p>
                        <p><strong>Mileage:</strong> {carDetails.mileage} KM</p>
                    </div>
                </div>
                <hr />
                <div className="m-4">
                    <Formik
                        initialValues={{
                            firstname: "",
                            lastname: "",
                            email: "",
                            phone: "",
                            pickuplocation: "",
                            pickupdate: "",
                            pickuptime: "",
                            destination: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handlePayment(values);
                            console.log({
                                values: values,
                                carDetails: carDetails
                            })
                        }}
                    >
                        <Form>
                            <h3 className="text-center mb-5 text-primary">Booking Form</h3>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <label htmlFor="firstname">First Name:</label>
                                    <Field type="text" className="form-control" name="firstname" />
                                    <ErrorMessage name="firstname" component="div" className="text-danger" />
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <label htmlFor="lastname">Last Name:</label>
                                    <Field type="text" className="form-control" name="lastname" />
                                    <ErrorMessage name="lastname" component="div" className="text-danger" />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="email">Email:</label>
                                    <Field type="email" className="form-control" name="email" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="pickuplocation">Pickup Location:</label>
                                    <Field type="text" className="form-control" name="pickuplocation" />
                                    <ErrorMessage name="pickuplocation" component="div" className="text-danger" />
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="destination">Destination:</label>
                                    <Field type="text" className="form-control" name="destination" />
                                    <ErrorMessage name="destination" component="div" className="text-danger" />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="pickupdate">Pickup Date:</label>
                                    <Field type="date" className="form-control" name="pickupdate" />
                                    <ErrorMessage name="pickupdate" component="div" className="text-danger" />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="pickuptime">Pickup Time:</label>
                                    <Field type="time" className="form-control" name="pickuptime" />
                                    <ErrorMessage name="pickuptime" component="div" className="text-danger" />
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="phone">Contact Number:</label>
                                    <Field type="text" className="form-control" name="phone" />
                                    <ErrorMessage name="phone" component="div" className="text-danger" />
                                </div>
                                <div className="col-lg-4 mt-4">
                                    <button className="btn btn-primary" type="submit">Reserve Booking</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Rent;
