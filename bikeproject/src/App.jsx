import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home/Home";
import ContactUs from "./assets/pages/ContactUs/ContactUs";
import ManageProducts from "./assets/pages/ManageProducts/ManageProducts";
import AddProduct from "./assets/pages/AddProduct/AddProduct";
import AddReview from "./assets/pages/AddReview/AddReview";
import VehicleDetails from "./assets/pages/ProductDetails/VehicleDetails";
import UpdateProduct from "./assets/pages/UpdateProduct/UpdateProduct";


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
      loader: function () {
        return fetch(`http://localhost:3000/all-vehicles`);
      },
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/manage-products",
      element: <ManageProducts />,
      loader: function () {
        return fetch(`http://localhost:3000/all-vehicles`);
      },
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    {
      path: "/add-review",
      element: <AddReview />,
    },
    {
      path: "/vehicle/:id",
      element: <VehicleDetails/>,
      loader: function ({params}) {
        return fetch(`http://localhost:3000/vehicle/${params.id}`)
      },
    },
    {
      path: "/update-vehicle/:id",
      element: <UpdateProduct/>,
      loader: function({params}){
        return fetch(`http://localhost:3000/vehicle/${params.id}`);
      },
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
