import { useLocation } from "react-router-dom";

function Payment() {
    const location = useLocation();
    const { price } = location.state || {};

    // Razorpay Payment Handler
    const handlePayment = () => {
        const options = {
            key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
            amount: price * 100, // Razorpay expects the amount in paisa (INR * 100)
            currency: "INR",
            name: "CAR24ON",
            description: "Car Booking Payment",
            handler: function (response) {
                alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                console.log(response); // For debugging and verification
            },
            prefill: {
                name: "Nitesh Rathor", // Replace with dynamic data
                email: "skr7065603126@gmail.com", // Replace with dynamic data
                contact: "7701859711", // Replace with dynamic data
            },
            theme: {
                color: "#3399cc", // Customize the theme color
            },
        };

        const rzp = new window.Razorpay(options); // Create a Razorpay instance
        rzp.open(); // Open the Razorpay payment window
    };

    if (!price) {
        return <div>Error: No price data available.</div>;
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5">Payment Page</h1>
            <p className="text-center">Total Amount: ₹{price}</p>
            <div className="text-center mt-3">
                <button className="btn btn-success" onClick={handlePayment}>
                    Pay Now
                </button>
            </div>
        </div>
    );
}

export default Payment;
