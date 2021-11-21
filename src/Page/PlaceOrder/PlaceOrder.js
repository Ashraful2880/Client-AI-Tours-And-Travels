import React, {useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../Hooks/UseFirebase';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {bookId}=useParams();
    const [booking, setBooking]=useState({});
    const {user}=useFirebase();

    // Load Single Data <--------------------->

    useEffect(()=>{
        fetch(`https://obscure-ridge-31160.herokuapp.com/booking/${bookId}`)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[]);

    //<------------ Send Data & Email To Database ------------->

    //<--------------- Booked User Information Here ---------------->

    const nameRef=useRef();
    const emailRef=useRef();
    const numberRef=useRef();
    const dateRef=useRef();
    const addressRef=useRef();
    
    const handleClick=(e)=>{
        e.preventDefault();
        const userName=(nameRef.current.value);
        const email=(emailRef.current.value);
        const number=(numberRef.current.value);
        const date=(dateRef.current.value);
        const address=(addressRef.current.value);

        const userInfo={userName:userName,email:email,number:number,date:date,address:address};
    
        const newData={...booking,...userInfo};
        delete newData._id;

        fetch('https://obscure-ridge-31160.herokuapp.com/manageOrders',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                window.alert("Successfully Added Your Order")
            };
        });
    };
    return (
        <div className="pt-3">
            <h2 className="text-primary">Confirm Your Booking</h2>
            <h5 className="text-secondary mb-4">You are on the way!!!</h5>
            <div className="row container mx-auto">
                <div className="col-sm-12 col-md-12 col-lg-6 text-start order-container">
                    <h3 className="head text-light">Package: {booking.name}</h3>
                    <img className="orderImage w-100 rounded-3 mt-4" src={booking.url} alt="" />
                    <h5 className="duration text-white text-xl font-semibold">Duration: {booking.duration}</h5>
                    <h3 className="text-success mt-2">Package Cost: {booking.cost}$</h3>
                    <p className="text-secondary pe-4">{booking.description}</p>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                   <div className=" mt-1 mb-5 ">
                        <h3 className="mb-4 text-secondary">Please Fill the Form</h3>
                        
                    <form onSubmit={handleClick} className="d-flex flex-column justify-content-center input-container">
                        <div>
                            <input className="w-75 p-2 mb-3" ref={nameRef} type="text" defaultValue= {user?.displayName} required/>
                        </div>
                        <div>
                            <input className="w-75 p-2 mb-3" ref={emailRef} type="email" defaultValue= {user?.email} required/>
                        </div>
                        <div>
                            <input className="w-75 p-2 mb-3" ref={numberRef}  type="number" placeholder="Contact Number" required/>
                        </div>
                        <div>
                            <input className="w-75 p-2 mb-3" ref={dateRef}  type="date" required/>
                        </div>
                        <div>
                            <input className="w-75 p-2 mb-3" ref={addressRef} type="text" placeholder=" Address (Optional)"/>
                        </div>
                        <div>
                            <input className="w-75 p-2 btn btn-primary" type="submit" value="Confirm" />
                        </div>
                    </form>
                   </div>   
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;