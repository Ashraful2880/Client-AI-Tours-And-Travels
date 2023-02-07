import React from 'react';
import { useForm } from "react-hook-form";
import './AddOrder.css';
import serviceimg from '../../Image/success-bg.jpg';

const AddOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`${process.env.REACT_APP_API_PATH}/addorder`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                alert("Service Added Successfully")
            }
        })
    };
    
    return (
        <div>
            <div className="row container mx-auto">
                <h2 className="text-warning mt-3
                ">Add Your Awesome Package</h2>
                <div className="col-sm-12 col-md-12 col-lg-6 text-start mt-5">
                    <img className="w-100 rounded-3 shadow-lg mt-4" src={serviceimg} alt="" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="d-flex flex-column justify-content-center align-items-center container">
                            <h4 className="mt-4 mb-3">Add Order from Here</h4>
                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Package Name" type="text" {...register("name", { required: true })} />
                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Package Price" type="number"{...register("cost", { required: true })} />
                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder=" Image URL" type="text"{...register("url", { required: true })} />
                            <input className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="How Many Days Stay" type="text"{...register("duration", { required: true })} />
                            <textarea className="w-100 p-2 mb-3 rounded-3 border-1 my-2" placeholder="Few Word About Service"{...register("description", { required: true })} /> 
                            <input className="w-25 p-2 mb-3 rounded-3 border-1 my-2 btn btn-primary" type="submit" value="Add Order" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOrder;