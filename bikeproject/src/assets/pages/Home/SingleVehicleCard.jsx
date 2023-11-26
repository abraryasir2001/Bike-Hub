import { Link } from "react-router-dom";
function SingleVehicleCard({ vehicle }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={vehicle?.image} alt={vehicle?.make + " " + vehicle?.model} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{vehicle?.make + " " + vehicle?.model}</h2>
        <p>{vehicle?.description?.slice(0, 100)}...</p>
        <div className="card-actions justify-between">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              $ {vehicle?.rent} per-hour
            </span>
          </button>

          <Link to={`/vehicle/${vehicle?._id}`}>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SingleVehicleCard;
