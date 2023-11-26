import { Link, useLoaderData } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import React, { useState } from 'react';
function ManageProductsTable() {
  //get all the fetched data from loader
  const data = useLoaderData();
  const [vehicles, setVehicles] = useState(data);
  //function for handle the delete of a single vehicle
  function handleDeleteVehicle(vehicleId) {
    fetch(`http://localhost:3000/delete-by-id/${vehicleId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount == 1) {
          const otherVehicle = vehicles?.filter(
            (vehicle) => vehicle._id != vehicleId
          );
          setVehicles(otherVehicle);
        }
      });
  }
  return (
    <div className="overflow-x-auto ">
      <table className="table w-full ">
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles?.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.rent}</td>
              <td>
                <Link to={`/vehicle/${vehicle?._id}`}>
                  <button
                    type="button"
                    class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <BiCommentDetail size={15}></BiCommentDetail>
                  </button>
                </Link>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => handleDeleteVehicle(vehicle._id)}
                >
                  <MdDelete size={15}></MdDelete>
                </button>
                <Link to={`/update-vehicle/${vehicle?._id}`}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <RxUpdate size={15}></RxUpdate>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ManageProductsTable;
