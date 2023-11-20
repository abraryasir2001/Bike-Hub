import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import AddProductForm from "./AddProductForm";

function AddProduct()
{
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <AddProductForm></AddProductForm>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default AddProduct;