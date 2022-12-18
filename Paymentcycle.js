import React from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from './background_image.jpg';
toast.configure();

export default function Paymentcycle(props) {
    const history = useHistory();
    const confirm_booking = async (event) => {
        event.preventDefault();
        var duration = localStorage.getItem('hours') + " hours " + localStorage.getItem('minutes') + " minutes";
        const response = await fetch("http://localhost:5000/api/bookcycle/cycle", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ from_time: localStorage.getItem('starttime'), to_time: localStorage.getItem('endtime'), date_of_booking: localStorage.getItem('dateofcyclebooking'), duration_of_booking: duration, rent: localStorage.getItem('cost'), email_id: localStorage.getItem('email') })
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
                                <h1>charges for per hour is : Rs 10</h1>
                                <h2 style={{ color: 'aqua' }}>you want to book a cycle from {localStorage.getItem('starttime')} to {localStorage.getItem('endtime')} on {localStorage.getItem('dateofcyclebooking')} for {localStorage.getItem('hours')} hours and {localStorage.getItem('minutes')} minutes </h2>
                                <h3 style={{ color: 'blue' }}>cost for the booking :</h3>
                                <h4 style={{ color: 'red' }}> Rs {localStorage.getItem('cost')}</h4>
                                <input type="submit" value="Confirm booking" onClick={confirm_booking} />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
