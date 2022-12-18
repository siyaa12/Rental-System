import React,{useState} from 'react';

import { useHistory } from "react-router-dom";
import './Icon.css';

import sitemainlogo from './sitemainlogo.png';
import icon from './icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


function Navbar() {
  var LOGOUT = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('mobile_number');

    toast("logout successfully");
    // alert("logout successfully");
    history.push('/');
    window.location.reload(true);
  }
  const history = useHistory();

  
  var richsaw  = ()=>{
    history.push('/managerichsaw');
  }



  const edit = () => {
    let path = `/Editprofile`;
    history.push(path);
  }
  const Profile = () => {
    history.push('/Profile');
  }
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-light bg-light " >
        <div className="container-fluid">
          <img src={sitemainlogo} alt="network error" style={{ width: '5vw', height: '9vh' }} />
          <a className="navbar-brand" href="/contact" style={{ marginRight: '48vw', marginLeft: '1vw', color: 'black' }}>Rental-system-iiitdmj</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Choose Booking
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/Cyclebook">Cycle Booking</a></li>
            <li><a className="dropdown-item" href="/Rikshawbook">Rikahaw Booking </a></li>
          {/* <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
            </li>

          {!localStorage.getItem('token')?<form className="d-flex">
            <a className="btn btn-success mx-1" href="/login" role="button">Login</a>
            <a className="btn btn-primary mx-1" href="/signup" role="button">Signup</a>
            </form>: <>
           
          <img src={icon} alt="network error" onClick = {Profile} style = {{
            width:'35px',
            marginLeft:'30px',
            marginRight:'51px'
          }}/>
            {/* <i className ="fas fa-user-circle icon" ></i> */}
            
            <li><button className="btn btn-outline-success" onClick={LOGOUT}> Logout</button></li>
         </>
            
    }




            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;


