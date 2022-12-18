import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { colors } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Payment from './Payment';
import { useHistory } from "react-router-dom";
import Image from './background_image.jpg';

export default function Rikshawbook() {
    const history = useHistory();

    if (!localStorage.getItem('token')) {
        let path = `/Login`;
        history.push(path);
    }

    //using map
    var distance;
    var moneypay;
    var map3 = new Map([["PANINI HOSTELCOMPUTER LAB", 1], ["COMPUTER LABPANINI HOSTEL", 1],
    ["PANINI HOSTELPANINI HOSTEL", 0],
    ["COMPUTER LABCOMPUTER LAB", 0],
    ["LIBRARYLIBRARY", 0],
    ["MESSMESS", 0],
    ["MAIN GATEMAIN GATE", 0],
    ["SPORTS COMPLEXSPORTS COMPLEX", 0],

    ["PANINI HOSTELSPORTS COMPLEX", 1.5],
    ["SPORTS COMPLEXPANINI HOSTEL", 1.5],
    ["PANINI HOSTELLIBRARY", 2],
    ["LIBRARYPANINI HOSTEL", 2],
    ["PANINI HOSTELMAIN GATE", 1],
    ["MAIN GATEPANINI HOSTEL", 1],
    ["PANINI HOSTELMESS", 4],
    ["MESSPANINI HOSTEL", 4],

    ["COMPUTER LABSPORTS COMPLEX", 1],
    ["SPORTS COMPLEXCOMPUTER LAB", 1],
    ["COMPUTER LABLIBRARY", 1.5],
    ["LIBRARYCOMPUTER LAB", 1.5],
    ["COMPUTER LABMAIN GATE", 2],
    ["MAIN GATECOMPUTER LAB", 2],
    ["COMPUTER LABMESS", 3],
    ["MESSCOMPUTER LAB", 3],

    ["SPORTS COMPLEXLIBRARY", 5],
    ["LIBRARYSPORTS COMPLEX", 5],
    ["SPORTS COMPLEXMAIN GATE", 2],
    ["MAIN GATESPORTS COMPLEX", 2],
    ["SPORTS COMPLEXMESS", 1.5],
    ["MESSSPORTS COMPLEX", 1.5],

    ["LIBRARYMAIN GATE", 3],
    ["MAIN GATELIBRARY", 3],
    ["LIBRARYMESS", 1.5],
    ["MESSLIBRARY", 1.5],

    ["MAIN GATEMESS", 3],
    ["MESSMAIN GATE", 3]

    ]);


    //using useState() hook  for storing data entered by user on RIKSHAWBOOK page
    const [data, setdata] = useState({
        time_of_booking: "",
        date_of_booking: { type: Date, required:true},
        startingpoint: "PANINI HOSTEL",
        destination: "PANINI HOSTEL"
    })
    //fuction for uptating current value to hook
    var handle = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    var rikshaw = () => {
        console.log(data);
        //    console.log(map3.get("sansandeep"));
        distance = map3.get(data.startingpoint + data.destination);
        moneypay = distance * 12;
        localStorage.setItem('time',data.time_of_booking);
        localStorage.setItem('date',data.date_of_booking);
        localStorage.setItem('startingpoint', data.startingpoint);
        localStorage.setItem('destination', data.destination);
        localStorage.setItem('distance', distance);
        localStorage.setItem('money', moneypay);



        let path = `/Payment`;
        history.push(path);

    }
    return (
        <div style = {{ backgroundImage: `url(${Image})`,height:'120vh' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form className="box">
                                <h1>book Rikashaw</h1>
                                <p className="text-muted"> Please Fill  All the deatails properly</p>
                                <span className="d-flex my-3">
                                    <h2 style = {{color:'aqua'}}>time  :</h2>
                                    <input type="time" name="time_of_booking" value={data.time_of_booking} onChange={handle} required = "true" style = {{position:'relative',left:'43px'}} />
                                </span>

                                <span className="d-flex">
                                    <h4 style = {{color:'aqua'}}>Date of booking </h4>
                                    <input type="date" name="date_of_booking" value={data.date_of_booking} onChange={handle} />
                                </span >          <div style={{ color: 'aqua', marginTop: '10px' }}>
                                    <h2>select starting point :</h2>

                                    <span>
                                        <select id="startingpoint" name="startingpoint" value={data.startingpoint} onChange={handle}>
                                            <option value="PANINI HOSTEL">PANINI HOSTEL</option>
                                            <option value="COMPUTER LAB">COMPUTER LAB</option>
                                            <option value="SPORTS COMPLEX">SPORTS COMPLEX</option>
                                            <option value="LIBRARY">LIBRARY</option>
                                            <option value="MAIN GATE">MAIN GATE</option>
                                            <option value="MESS">MESS</option>
                                        </select>
                                    </span>
                                </div>
                                <div style={{ color: 'aqua', marginTop: '10px' }}>
                                    <h2>select destination point :</h2>

                                    <span>
                                        <select id="destination" name="destination" value={data.destination} onChange={handle}>
                                            <option value="PANINI HOSTEL">PANINI HOSTEL</option>
                                            <option value="COMPUTER LAB">COMPUTER LAB</option>
                                            <option value="SPORTS COMPLEX">SPORTS COMPLEX</option>
                                            <option value="LIBRARY">LIBRARY</option>
                                            <option value="MAIN GATE">MAIN GATE</option>
                                            <option value="MESS">MESS</option>
                                        </select>
                                    </span>
                                </div>







                                <input type="submit" name="" value="book your ride" href="#" onClick={rikshaw} />


                                {/* <Link to = "/Signup">i am new User</Link> */}

                            </form>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}
