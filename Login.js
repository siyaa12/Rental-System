import React,{useState} from 'react'
import './Signup.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from './background_image.jpg';
// import Axios from 'axios';
toast.configure();
export default function Login(props) {
  const history = useHistory();

  //using useState() hook  for storing data entered by user on signup page
   const[data,setdata] = useState({
     email:"",
     password:"",
   })

//fuction for uptating current value to hook
var handle = (event)=>{
  setdata({...data,[event.target.name]:event.target.value})
}

//this function is  called when button is clicked
var register = async (event)=>{
  event.preventDefault();
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: data.email, password: data.password})
});
const json = await response.json()
console.log(json);
if (json.success){
    // Save the auth token and redirect
    localStorage.setItem('token', json.authtoken); 
    localStorage.setItem('username',json.result[0].username);
    // console.log(json.result[0].username);
    localStorage.setItem('email',json.result[0].email_id);
    localStorage.setItem('mobile_number',json.result[0].mobile_number);
    // props.showAlert("logged in successfully","success");
    
    toast("logged in successfully")
    // setTimeout( , 7000);
    history.push("/");
    
    window.location.reload(true);
    

}
else{
  // props.showAlert("invalid data","danger");
  toast("invalid data");
    // alert("Invalid data");
}
}
  return (
    <div style = {{ backgroundImage: `url(${Image})`,height:'100vh' }}>
      <div className="container" >
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form className="box">
                <h1>Login</h1>
                <p className="text-muted"> Please enter your email and password!</p>
                 <i class="fas fa-envelope-square" style={{position:'relative',left:'-106px',top:'34px',backgroundColor:'rgb(118, 146, 146)'}}></i>
                <input type="email" name="email" placeholder="email" value = {data.email} onChange = {handle} />
                <i class="fas fa-lock" style={{position:'relative',left:'-106px',top:'34px',backgroundColor:'rgb(118, 146, 146)'}}></i>
                <input type="password" name="password" placeholder="Password" value = {data.password} onChange = {handle} />
                {/* <a className="forgot text-muted" href="#">Forgot password?</a> */}
                <input type="submit" name="" value="Login" onClick = {register} />
                <Link to = "/Signup">i am new User</Link>
                {/* <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li><a href="#" className="icoFacebook" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    </li>
                    <li><a href="#" className="icoTwitter" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li><a href="#" className="icoGoogle" title="Google +">
                      <i className="fab fa-google-plus"></i>
                    </a>
                    </li>
                  </ul>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
