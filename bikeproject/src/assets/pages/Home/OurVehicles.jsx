import { useLoaderData } from "react-router-dom";
import SingleVehicleCard from "./SingleVehicleCard";

function OurVehicles() {
  const vehicles = useLoaderData();
  console.log(vehicles);
  return (
    <div className="my-10">
      <div className="text-center mb-8">
        <p className="font-bold">Vehicle Models</p>
        <h1 className="text-3xl font-bold">
          Our <span className="text-blue-500">Vehicles</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {vehicles?.map((vehicle) => (
          <SingleVehicleCard key={vehicle._id} vehicle={vehicle}></SingleVehicleCard>
        ))}
      </div>
    </div>
  );
}
export default OurVehicles;
