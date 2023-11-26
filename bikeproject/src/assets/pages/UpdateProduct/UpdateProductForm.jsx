import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateProductForm(){
    const vehicle=useLoaderData();

    const navigate=useNavigate();
    function handleUpdateVehicle(event){
        event.preventDefault();
         //caputer form values
    const make = event.target.make.value;
    const model = event.target.model.value;
    const image = event.target.image.value;
    const rent = event.target.rent.value;
    const description = event.target.description.value;
    //create new obj with the form values
    const updatedVehicle = {           
      make: make,               
      model: model,             
      image: image,             
      rent: rent,               
      description: description, 
    };                          
    //Now make a put req to the server for updating this vehicle object
    console.log(updatedVehicle);  
    fetch(`http://localhost:3000/update-by-id/${vehicle?._id}`,{
    method:"PUT",
    headers:{
        "Content-type":"application/json"
    },
    body: JSON.stringify(updatedVehicle),
    })
    .then(res=>res.json())
    .then(data=> {
        if(data.modifiedCount==1){
            navigate(`/manage-products`)
        }
    })
}                               
    return(                 
        <form
        onSubmit={handleUpdateVehicle}
        className="my-10 flex flex-col gap-y-5"
      >
        <input
          type="text"
          placeholder="Bike Company/make"
          defaultValue={vehicle?.make}
          name="make"
          className="input input-bordered input-info w-full input-bordered"
        />

        <input
          type="text"
          placeholder="Bike model"
          defaultValue={vehicle?.model}
          name="model"
          className="input input-bordered input-info w-full input-bordered"
        />

        <input
          type="text"
          placeholder="Bike image"
          defaultValue={vehicle?.image}
          name="image"
          className="input input-bordered input-info w-full input-bordered"
        />

        <input
          type="text"
          placeholder="Bike rent ($ per hour)"
          defaultValue={vehicle?.rent}
          name="rent"
          className="input input-bordered input-info w-full input-bordered"
        />

        <textarea
          className="textarea textarea-info"
          name="description"
          defaultValue={vehicle?.description}
          placeholder="Bike Description"
        ></textarea>
        <div className="flex justify-center">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    )
}

export default UpdateProductForm;