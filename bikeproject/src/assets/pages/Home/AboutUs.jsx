function AboutUs() {
  const style = {
    border: "none",
    height: "1px",
    color: "#333",
    backgroudColor: "#333",
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <p className="text-lg font-semibold text-2xl">
            {" "}
            About <span className="text-red-600 font-bold">Bike Roadsters</span>
          </p>
          <h1 className="text-xl font-bold">
            You start the engine <br />&{" "}
            <span className="text-red-600 font-bold">BOOOM !!!</span> <br />
          </h1>
          <p className="py-6">
            At Bike Roadsters, we're passionate about enhancing your
            journey through seamless bike rentals. <br /> Our commitment lies in
            providing top-quality bikes and exceptional service, ensuring every
            ride becomes an unforgettable experience.
          </p>
  
          <hr style={style} />
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-y-3">
              <h1>Bike Types</h1>

              <div className="flex">
                <img
                  src="https://graphicsprings.com/wp-content/uploads/2023/04/056f0a48f9ce33b247d8a3f6176fda52.svg?x44840"
                  alt=""
                  width="40"
                />
                <h1 className="text-3xl">25</h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1>Rental Outlets</h1>

              <div className="flex">
                <img
                  src="https://graphicsprings.com/wp-content/uploads/2023/04/6eb779a84a50db8b57c491a9c0274be0.svg?x44840"
                  alt=""
                  width="40"
                />
                <h1 className="text-3xl">20</h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <h1>Repair Shops</h1>

              <div className="flex">
                <img
                  src="https://graphicsprings.com/wp-content/uploads/2023/04/fb0bae9a6d6fba752d2a285a7f86e896.svg?x44840"
                  alt=""
                  width="40"
                />
                <h1 className="text-3xl">15</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
