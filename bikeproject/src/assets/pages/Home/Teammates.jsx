import { useEffect, useState } from "react";

function Teammates() {
  const [teammates, setTeammates] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/all-teammates`)
      .then((res) => res.json())
      .then((data) => setTeammates(data));
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="my-10">
      <div className="text-center mt-10">
        <p className="text-blue-500 font-bold">Meet Our Teams</p>
        <h2 className="text-2xl font-bold">Read what our team says</h2>
      </div>

      {/* Heading ends */}

      {/* Show all the teammates */}
      <div className="grid grid-cols-1 gap-5">
        {teammates.map((teammate) => (
          <div
            key={teammate?._id}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <figure className="md:w-80">
              <img src={teammate?.photo} />
            </figure>
            <div className="card-body md:w-80">
              <h2 className="card-title font-bold">{teammate?.fullName}</h2>
              <p className="text-sm">{teammate?.position}</p>
              <p>{teammate?.message}</p>
              <div className="card-actions justify-end">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {teammate?.email}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teammates;
