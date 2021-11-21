import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [booking,setBooking]=useState([]);
    useEffect(()=>{
        fetch('https://obscure-ridge-31160.herokuapp.com/manageOrders')
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[])   
    return (
        <div>
            <div className="mt-5 pt-4">
                <h2 className="text-warning">All Orders</h2>
                <h4 className="mb-5">Total Package Orders: {booking.length}</h4>
            </div>
            <div>
                {
                    booking.map(booked=><ManageOrder key={booked._id} booked={booked} />)
                }
            </div>
        </div>
    );
};

export default ManageOrders;