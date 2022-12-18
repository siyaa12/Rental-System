import React from 'react'
import photo from './cycle.jpg';
import { ToastContainer, toast } from 'react-toastify';

toast.configure();

export default function Cyclebookingcard(props) {
    const cancel_booking = async()=>{
       
        const response = await fetch("http://localhost:5000/api/delete/cycle", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({booking_id : props.booking_id})
      });
      const json = await response.json();
      toast("booking canceled successfully");
    }
   
    return (
        <div>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={photo}alt="Card image cap"/>
                <div class ="card-body">
                <h5 class ="card-title">booking details</h5>
                <p class ="card-text">you have booked Cycle from time {props.from_time} to time {props.to_time} on date {props.date_of_booking} for {props.duration_of_time} </p>
                <a onClick = {cancel_booking} href="" class ="btn btn-primary">cancel</a>
                </div>
            </div>
        </div>
    )
}
