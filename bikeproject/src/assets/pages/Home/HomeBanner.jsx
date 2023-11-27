function HomeBanner() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src="https://images.hindustantimes.com/auto/img/2023/09/26/original/2024_Yamaha_R15_V4_Japan_2_1695746966699.jpg"
          className="md:w-1/2"
        />
        <div className="md:w-1/2">
          <p className="text-sm font-bold">Plan Your Trip now</p>
          <h1 className="text-5xl font-semibold">
            Save <span className="text-blue-500">Big</span> with our <br />
            Bike Rental
          </h1>
          <p className="py-6">
            Welcome to{" "}
            <span className="text-blue-600 font-bold">Bike Roadsters</span>,
            where adventure meets convenience. Explore the city on wheels with
            our premium bike rental services.
          </p>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Book Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HomeBanner;
