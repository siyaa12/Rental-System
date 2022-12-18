import React from 'react'
import photo from './e-riksha.jpg';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();
export default function Bookingcard(props)  {
    const cancel_booking = async ()=>{
      
        
        const response = await fetch("http://localhost:5000/api/delete/e-richsaw", {
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
        <div >
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={photo}alt="Card image cap"/>
                <div class ="card-body">
                <h5 class ="card-title">booking details</h5>
                <p class ="card-text">you have booked e-richsaw from time {props.time_of_booking} on date {props.date_of_booking} from {props.starting_point} to {props.destination}</p>
                <a onClick = {cancel_booking} href="" class ="btn btn-primary">cancel</a>
                {/* <a href="#" >cancel</a> */}
                </div>
            </div>
        </div>
    )
}
