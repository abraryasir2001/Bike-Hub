import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { MdDelete, MdVerticalShadesClosed } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import React, { useState } from "react";
function ManageTeamTable() {
  //get all the fetched data from loader
  const data = useLoaderData();
  const [teammate, setTeammates] = useState(data);
  //function for handle the celetion of a single vehicle
  function handleDeleteTeammate(teammateId) {
    fetch(`http://localhost:3000/deleteteammate/${teammateId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const otherTeammate = teammate?.filter(
            (teammate) => teammate._id != teammateId
          );
          setTeammates(otherTeammate);
        }
      });
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Teammate Name</th>
            <th>Teammate Position</th>
            <th>Teammate Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teammate?.map((teammate) => (
            <tr key={teammate._id}>
              <td>{teammate.fullName}</td>
              <td>{teammate.position}</td>
              <td>{teammate.email}</td>
              <td>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => handleDeleteTeammate(teammate._id)}
                >
                  <MdDelete size={15}></MdDelete>
                </button>

                <Link to={`/update-teammate/${teammate?._id}`}>
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
export default ManageTeamTable;
