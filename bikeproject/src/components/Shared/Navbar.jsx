import { Link } from "react-router-dom";
function Navbar() {
  const navLinks = (
    <>
      <li>
        <Link to={"/contact-us"}>Contact Us</Link>
      </li>
      <li tabIndex={0}>
        <Link to={"/manage-products"}>Manage Products</Link>
      </li>
      <li>
        <Link to={"/add-product"}>Add Product</Link>
      </li>
      <li>
        <Link to={"/add-teammate"}>Add Member</Link>
      </li>
      <li>
        <Link to={"/manage-teammate"}>Manage Team</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/Home"} className="btn btn-ghost text-xl">
          Bike Roadsters
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/team">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Explore Team
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
