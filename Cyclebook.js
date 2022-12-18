import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import Image from './background_image.jpg';

export default function Cyclebook() {
    const history = useHistory();

    if (!localStorage.getItem('token')) {
        let path = `/Login`;
        history.push(path);
    }
    const [state, setstate] = useState({
        starttime :'04:20',
        endtime :'04:20',
        date: { type: Date, default: Date.now }
    });
    const handle = (event) => {
        setstate({...state,[event.target.name] : event.target.value});
    }
    var click = ()=>{
        console.log(state);
        let hour1 = 0,hour2 = 0,minutes1 = 0,minutes2 = 0;
        hour1 = parseInt(state.starttime.substring(0,2));
        minutes1 = parseInt(state.starttime.substring(4,5));
        hour2 = parseInt(state.endtime.substring(0,2));
        minutes2 = parseInt(state.endtime.substring(4,5));
        if(minutes1>minutes2)
        {
            hour2-=1;
            minutes2+=60;

        }
        let hour_booking = hour2-hour1;
        let minutes_booking = minutes2-minutes1;
        let cost =parseInt( (hour_booking + (minutes_booking/60))*10);
        localStorage.setItem('starttime',state.starttime);
        localStorage.setItem('endtime',state.endtime);
        localStorage.setItem('dateofcyclebooking',state.date);
        localStorage.setItem('hours',hour_booking);
        localStorage.setItem('minutes',minutes_booking);
        localStorage.setItem('cost',cost);
        let path = `/Paymentcycle`; 
        history.push(path);
    }
    return (
        <div style = {{ backgroundImage: `url(${Image})`,height:'120vh' }}>
             <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form className="box">
                            <h1>book cycle</h1>
                                <p className="text-muted"> Please Fill  All the deatails properly</p>
                                <h2 style = {{color:'burlywood',position:'relative',left:'65px'}}>From</h2>
                                <span className="d-flex">
                                    <h2 style = {{color:'aqua'}}>time :</h2>
                                    <input type="time" name="starttime"  value={state.starttime} onChange={handle} style = {{position:'relative',left:'43px'}} />
                                </span>
                                
                                <h2 style = {{color:'burlywood',marginTop:'15px',position:'relative',left:'65px'}}>To</h2>
                                <span className="d-flex">
                                    <h2 style = {{color:'aqua'}}>time :</h2>
                                    <input type="time" name="endtime"   value={state.endtime} onChange={handle} style = {{position:'relative',left:'43px'}} />
                                </span>
                                <span className="d-flex">
                                    <h4 style = {{color:'aqua',marginTop:'20px'}}>Date of booking  </h4>
                                    <input type="date" name="date"  value={state.date} onChange={handle} style = {{marginTop:'10px'}} />
                                </span >


                                {/* <input type ="password" name="" placeholder="Password" />  */}
                                {/* <a className="forgot text-muted" href="#">Forgot password?</a> */}
                               
                               

                                  
                                    




                                <input type="submit" name="" value="book your ride" href="#" onClick = {click} />
                               

                                {/* <Link to = "/Signup">i am new User</Link> */}

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
