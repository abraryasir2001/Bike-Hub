import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import ManageProductsTable from "./ManageProductsTable";

function ManageProducts() {
    
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        {/* Manage vehicle heading */}
        <div className="text-center my-10">
          <p className="text-blue-500 font-bold">Manage Vehicles</p>
          <h2 className="text-2xl font-bold">
           Update or Delete Vehicle Here
          </h2>
        </div>

        <ManageProductsTable></ManageProductsTable>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default ManageProducts;
