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
            Save <span className="text-orange-500">Big</span> with our <br />
            Bike Rental
          </h1>
          <p className="py-6">
            Welcome to <span className="text-orange-600 font-bold">Bike Roadsters</span>, where adventure meets convenience.
            Explore the city on wheels with our premium bike rental services.
          </p>
          <button className="btn btn-warning">Book Now</button>
        </div>
      </div>
    </div>
  );
}
export default HomeBanner;
