import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/UseFirebase';
import BookingList from '../BookingList/BookingList';


const MyOrder = () => {
    const {user}=useFirebase();
    const [orders,setOrders]=useState([])
    
    useEffect(()=>{
        const url=`https://obscure-ridge-31160.herokuapp.com/myOrders/${user.email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user]);

    return (
        <div className="pt-4 ">
            <div className="mb-5">
                <h2 className="text-warning">Check Your Orders</h2>
                <h3>Current Booking: {orders.length}</h3>
            </div>
            {
                orders.map(order=><BookingList key={order._id} order={order}/>)
            }
        </div>
    );
};

export default MyOrder;