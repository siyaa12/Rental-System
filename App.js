// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Signup from './components/Signup';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Cyclebook from './components/Cyclebook';
import Rikshawbook from './components/Rikshawbook';

import Footer from './components/Footer';

import Editprofile from './components/Editprofile';
import Payment from './components/Payment';
import Paymentcycle from './components/Paymentcycle';


import Profile from './components/Profile';



function App() {
  
  return (
    <div>
      <Navbar  />
      
      <Route exact path = "/">
      
      <Carousel/>
      <Footer/>
        </Route>
      
      <Route exact path = "/Signup">
      <Signup />
        </Route>
        <Route exact path = "/Login">
      <Login   />
        </Route>
        <Route exact path = "/Cyclebook">
      <Cyclebook/>
        </Route>
        <Route exact path = "/Rikshawbook">
      <Rikshawbook/>
        
        </Route>
        
        <Route exact path = "/Editprofile">
         <Editprofile/>
        </Route>
        <Route exact path = "/Payment">
         <Payment />
        </Route>
        <Route exact path = "/Paymentcycle">
         <Paymentcycle />
        </Route>
        
        
        <Route exact path = "/Profile">
         <Profile />
        </Route>

        
     
    </div>
  );
}

export default App;
