import { useNavigate } from "react-router-dom";
function AddProductForm() {
  const navigate = useNavigate();
  function handlePostVehicle(event) {
    event.preventDefault();
    //caputer form values
    const make = event.target.make.value;
    const model = event.target.model.value;
    const image = event.target.image.value;
    const rent = event.target.rent.value;
    const description = event.target.description.value;
    //create new obj with the form values
    const vehicle = {
      make: make,
      model: model,
      image: image,
      rent: rent,
      description: description,
    };
    //now make a post req to the server for storing this obj
    console.log(vehicle);
    fetch(`http://localhost:3000/add-a-vehicle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehicle),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/manage-products");
        }
      });
  }
  return (
    <div>
      <div className="text-center mt-10">
        <p className="text-blue-500 font-bold">Add Vehicles</p>
        <h2 className="text-2xl font-bold">
          Add New Vehicle Here
        </h2>
      </div>
      <form
        onSubmit={handlePostVehicle}
        className="my-10 flex flex-col gap-y-5"
      >
        <input
          type="text"
          placeholder="Bike Company/make"
          name="make"
          className="input input-bordered input-info w-full input-bordered"
        />

        <input
          type="text"
          placeholder="Bike model"
          name="model"
          className="input input-bordered input-info w-full input-bordered"
        />

        <input
          type="text"
          placeholder="Bike image"
          name="image"
          className="input input-bordered input-info w-full input-bordered"
        />

        <input
          type="text"
          placeholder="Bike rent ($ per hour)"
          name="rent"
          className="input input-bordered input-info w-full input-bordered"
        />

        <textarea
          className="textarea textarea-info"
          name="description"
          placeholder="Bike Description"
        ></textarea>
        <div className="flex justify-center">
          <button
            type="submit"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddProductForm;
