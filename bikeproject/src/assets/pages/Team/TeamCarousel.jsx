import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function TeamCarousel() {
  const team = useLoaderData();
  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        {team?.map((singlePerson) => (
          <div
            key={singlePerson?._id}
            className="hero min-h-screen bg-base-200"
          >
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={singlePerson?.photo}
              />
              <div>
                <h1 className="text-5xl font-bold">{singlePerson?.fullName}</h1>
                <p className="text-sm font-bold">Role: {singlePerson?.position}</p>
                <p className="py-6">
                {singlePerson?.message}
                </p>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {singlePerson?.email}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default TeamCarousel;
