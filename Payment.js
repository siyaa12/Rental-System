import React from 'react'
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from './background_image.jpg';
toast.configure();


export default function Payment() {
    const history = useHistory();

    if(!localStorage.getItem('token'))
    {
        let path = `/Login`; 
        history.push(path);
    }
    const confirm_booking = async(event)=>{
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/bookrichshaw/richshaw", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ time_of_booking: localStorage.getItem('time'), date_of_booking: localStorage.getItem('date'),startingpoint: localStorage.getItem('startingpoint'),destination : localStorage.getItem('destination'),distance:localStorage.getItem('distance'),rent :localStorage.getItem('money'),email_id:localStorage.getItem('email')})
        });
        
        toast("your ride is booked successfully");
      history.push('/');
    }
    return (
        
        <div style = {{ backgroundImage: `url(${Image})`,height:'120vh' }}>
             <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form className="box">
            <h1>RENT FOR 1 KM IS = Rs 12</h1>
             <h2 style = {{color:'aqua'}}>time of booking :{localStorage.getItem('time')}</h2>
             <h2 style = {{color:'aqua'}}>date of booking :{localStorage.getItem('date')}</h2>
            <h2 style = {{color:'#007eff'}}>Distance between {localStorage.getItem('startingpoint')} to {localStorage.getItem('destination')} is {localStorage.getItem('distance')} Km</h2>
            <h3 style = {{color:'#9d00ff'}}>Money that you have pay to book this ride </h3>
            <h4 style = {{color:'red'}}> Rs {localStorage.getItem('money')}</h4>
            <input type="submit" value = "confirm booking" onClick = {confirm_booking} />
            </form>
                        </div>
                    </div>
                </div>
            </div>
             {/* localStorage.clear();  */}
        </div>
    )
}
