import React, { useState } from 'react'
import Bookingcard from './Bookingcard';
import Cyclebookingcard from './Cyclebookingcard';
import { useEffect } from 'react';
import './Profile.css';


export default function Profile() {
    const [Richsawbooking, setrichsawbooking] = useState([]);

    const richsaw_bookings = async () => {
    
        const response = await fetch("http://localhost:5000/api/show/richsaw", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email_id: localStorage.getItem('email') })
        });
        const json = await response.json();
        setrichsawbooking(json.result);
        
    
    
        console.log(json);
    
    
    }
    useEffect(() => {
        richsaw_bookings();
     }, [])

     const [cyclebooking, setcyclebooking] = useState([]);

    const cycle_bookings = async () => {

        const response = await fetch("http://localhost:5000/api/show/cycle", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email_id: localStorage.getItem('email') })
        });
        const json = await response.json();
        setcyclebooking(json.result);


        console.log(json);


    }
    useEffect(() => {
        cycle_bookings();
     }, [])

    return (
        <div >
            <div >
    <div class="padding">
        <div class="row container  justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card ">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile" style = {{width:'545px'}}>
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 class="f-w-600">{localStorage.getItem('username')}</h6>
                                 <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">{localStorage.getItem('email')}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Phone</p>
                                        <h6 class="text-muted f-w-400">{localStorage.getItem('mobile_number')}</h6>
                                    </div>
                                </div>
                                
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            
            <h1 className="text-center">e-richsaw booking details</h1>
            <div className="container my-3">

                <div className="row ">


                    {Richsawbooking.map((result) => { 
                        return (
                            <div className="col-md-4 " >

                                <Bookingcard time_of_booking={result.time_of_booking} date_of_booking={result.date_of_booking} starting_point={result.starting_point} destination={result.destination} booking_id={result.booking_id} />
                            </div>
                        )
                    })}


                </div>



            </div>
            <h1 className="text-center">cycle booking details</h1>
            <div className="container my-3">

                <div className="row ">


                    {cyclebooking.map((res) => {
                        return (
                            <div className="col-md-4 " >

                                <Cyclebookingcard from_time={res.from_time} to_time={res.to_time} date_of_booking={res.date_of_booking} duration_of_time={res.duration_of_booking} booking_id={res.booking_id} />
                            </div>
                        )
                    })}


                </div>



            </div>

        </div>
    )
}
