import { Link } from 'react-router-dom'; 
function SingleVehicleCard({vehicle}){
    return(
        <div
            
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={vehicle?.image}
                alt={vehicle?.make + " " + vehicle?.model}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{vehicle?.make + " " + vehicle?.model}</h2>
              <p>{vehicle?.description?.slice(0,100)}...</p>
              <div className="card-actions justify-between">
              <button className="btn btn-primary">$ {vehicle?.rent} per-hour</button>
              <Link to={`/vehicle/${vehicle?._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
              </div>
            </div>
          </div>
    );
}
export default SingleVehicleCard;