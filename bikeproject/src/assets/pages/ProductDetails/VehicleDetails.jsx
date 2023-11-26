import { useLoaderData } from "react-router-dom";
import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";

function VehicleDetails() {
  const details = useLoaderData();
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="my-10 card lg:card-side bg-base-100 shadow-2xl">
          <figure className="md:w-1/2">
            <img src={details?.image} alt="Album" />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title">{details?.make}</h2>
            <h2 className="card-title">{details?.model}</h2>
            <p>{details?.description}</p>
            <div className="card-actions justify-end">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ${details?.rent}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default VehicleDetails;
