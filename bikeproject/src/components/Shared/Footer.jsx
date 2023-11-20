import { IoLocationSharp } from "react-icons/io5"
import {BsBagPlus} from "react-icons/bs"
import {FaBoxOpen} from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className="bg-blue-600">
      <footer className="max-w-6xl mx-auto footer grid-cols-1 md:grid-cols-3 p-10 text-white">
        <div className="h-full felx items-center">
          <div className="flex item-center gap-1">
            {/* icon here */}
            <IoLocationSharp size={25}></IoLocationSharp>
            <p>IIUC, Kumira, Chittagong</p>
          </div>
        </div>
        <div>
          <header className="footer-title">Company</header>
          <Link to ={'/contact-us'}> <span className="flex items-center gap-1"><IoIosContacts size={15}></IoIosContacts>Contact Us</span></Link>
          <Link to ={'/manage-products'}><span className="flex items-center gap-1"><FaBoxOpen size={15}></FaBoxOpen>Manage Products</span></Link>
          <Link to ={'/add-product'}><span className="flex items-center gap-1"><BsBagPlus size={15}></BsBagPlus>Add Product</span></Link>
        </div>
        <div>
          <header className="footer-title">Legal</header>
         <p>Pedal your way to adventure with our diverse bike fleet and reliable rental services. Explore more, ride better with Bike Roadsters</p>
        <div className="flex justify-between gap-2">
        <FaFacebook size={25}></FaFacebook>
        <FaLinkedin size={25}></FaLinkedin>
        <FaTwitter size={25}></FaTwitter>
        </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
