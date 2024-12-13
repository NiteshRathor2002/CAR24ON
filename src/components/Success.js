import { useLocation, useNavigate } from "react-router-dom";
import './Success.css'
function Success() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;

    return (
        <div className="container ">
            <div className=" d-flex justify-content-center mt-5">
            <div className=" d-flex justify-content-center flex-column text-center payment rounded-3 p-3">
            <h1> Your Payment Successful</h1>
            <p>Payment ID: {state?.paymentId}</p>
           <div className=" d-flex justify-content-center">
           <button onClick={() => navigate('/NavOffers')}
    className="btn btn-primary w-50"> Back </button>
           </div>
            </div>
            </div>
          
        </div>
    );
}

export default Success;
