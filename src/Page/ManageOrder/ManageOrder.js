import './ManageOrder';

const ManageOrder = ({booked}) => {
    const {url,name,description,duration,cost,_id}=booked;

    //<-------------- Delete Data By Click ------------>
    
    const handleDelete=(id)=>{
        const proceed=window.confirm("Are You Sure ? Want to Delete?");
        if (proceed){
            const url=`https://obscure-ridge-31160.herokuapp.com/deleteService/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    window.alert('Deleted Successfully')
                }
                window.location.reload(false);
        })
        }
    }
    return (
        <div>
            <div className="row container mx-auto border py-3 mb-3">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    <img className="w-75 rounded-3 single-img" src={url} alt="booked-pic" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                    <h4>Booked Service: {name}</h4>
                    <p className="text-secondary">Details: {description}</p>
                    <h5 className="text-info">Duration: {duration}</h5>
                    <h5>Price: {cost}$</h5>
                    <button className="btn mt-3 btn-success border-0 mx-3">Proceed</button>
                    <button onClick={()=>handleDelete(_id)} className="btn mt-3 btn-danger border-0 mx-3">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;