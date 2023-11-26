import {Link} from "react-router-dom"
function Navbar(){
    const navLinks =(
        <>
         <li>
            <Link to ={'/contact-us'}>Contact Us</Link>
         </li>
      <li tabIndex={0}>
      <Link to ={'/manage-products'}>Manage Products</Link>
      </li>
      <li><Link to ={'/add-product'}>Add Product</Link></li>
      <li><Link to ={'/add-teammate'}>Add Member</Link></li>
        </>
    );
   return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
    <Link to ={'/Home'} className="btn btn-ghost text-xl">Bike Roadsters</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
   )
}
export default Navbar;