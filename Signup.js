import React, { useState } from 'react'
import './Signup.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Image from './background_image.jpg';
// import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export default function Signup() {
  const history = useHistory();

  // const register = () =>{ 
  //   let path = `/Login`; 
  //   history.push(path);
  // }



  //using useState() hook  for storing data entered by user on signup page
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    mobile_number: ""
  })

  //fuction for uptating current value to hook
  var handle = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }

  //this function is  called when button is clicked
  var register = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:data.username,
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmpassword,
        mobile_number :data.mobile_number
      })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      // localStorage.setItem('token', json.authtoken);
      localStorage.setItem('token', json.authtoken); 
      localStorage.setItem('username',data.username);
      // console.log(json.result[0].username);
      localStorage.setItem('email',data.email);
      localStorage.setItem('mobile_number',data.mobile_number);
      toast("registered successfully");
       history.push("/");
       window.location.reload();

    }
    else {
      toast("invalid data");
    }
  }

  return (
    <div style = {{ backgroundImage: `url(${Image})`,height:'150vh' }}>
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form method="POST" className="box">
                <h1>SignUp</h1>
                <p className="text-muted"> Please enter your details carefully</p>
                <i class="fas fa-user" style={{ position: 'relative', left: '-103px', top: '32px', backgroundColor: 'rgb(118, 146, 146)' }}></i>

                <input type="text" name="username" placeholder="Username" value={data.username} onChange={handle} />
                <i class="fas fa-envelope-square" style={{ position: 'relative', left: '-106px', top: '34px', backgroundColor: 'rgb(118, 146, 146)' }}></i>
                <input type="email" name="email" placeholder="email" value={data.email} onChange={handle} />
                <i class="fas fa-lock" style={{ position: 'relative', left: '-106px', top: '34px', backgroundColor: 'rgb(118, 146, 146)' }}></i>
                <input type="password" name="password" placeholder="Password" value={data.password} onChange={handle} />
                <i class="fas fa-lock" style={{ position: 'relative', left: '-106px', top: '34px', backgroundColor: 'rgb(118, 146, 146)' }}></i>
                <input type="password" name="confirmpassword" placeholder="ConfirmPassword" value={data.confirmpassword} onChange={handle} />
                <input type="text" name="mobile_number" placeholder="mobile number" style={{ marginTop: '22px' }} value={data.mobile_number} onChange={handle} />
                {/* <a className="forgot text-muted" href="#">Forgot password?</a> */}
                <input type="submit" name="" value="SignUp" onClick = {register}  />
                {/* <button onClick={register}>submit</button> */}
                <Link to="/Login">i have an Account</Link>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
