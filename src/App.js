import './App.css';
import Header from './components/Header.js';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home.js';
import Register from "./components/Register.js";
import Navabout from './components/Navabout.js';
import Rent from './components/Rent.js';
import Navoffers from './components/Navoffers.js';
import Contact from './components/Contact.js';
import NavServices from './components/NavServices.js';
import Success from './components/Success.js';

function App() {
  return (
   <>
<Router>
  <Header/>
  
<Routes>
  <Route  path="/" element={<Home />} ></Route>
  <Route  path="/Register" Component={Register} ></Route>
  <Route  path="/Navabout" Component={Navabout} ></Route>
  <Route  path="/Contact" Component={Contact} ></Route>
  <Route  path="/Rent/:id" Component={Rent} ></Route>    {/* The `/Rent/:id` route renders the `Rent.js` component and passes the car ID as a parameter. */}
  <Route  path="/NavServices" Component={NavServices} ></Route>
  <Route  path="/Navoffers" Component={Navoffers} ></Route>
  <Route path="/Success" element={<Success />} />
  <Route path="/Navoffers" element={<Navoffers />} />

</Routes>
</Router>
   </>
  );
}

export default App;
