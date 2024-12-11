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

function App() {
  return (
   <>
<Router>
  <Header/>
  
<Routes>
  <Route exact path="/" Component={Home} ></Route>
  <Route exact path="/Register" Component={Register} ></Route>
  <Route exact path="/Navabout" Component={Navabout} ></Route>
  <Route exact path="/Contact" Component={Contact} ></Route>
  <Route exact path="/Rent/:id" Component={Rent} ></Route>    {/* The `/Rent/:id` route renders the `Rent.js` component and passes the car ID as a parameter. */}
  <Route exact path="/NavServices" Component={NavServices} ></Route>
  <Route exact path="/Navoffers" Component={Navoffers} ></Route>




</Routes>
</Router>
   </>
  );
}

export default App;
