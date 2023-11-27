import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home/Home";
import ContactUs from "./assets/pages/ContactUs/ContactUs";
import ManageProducts from "./assets/pages/ManageProducts/ManageProducts";
import AddProduct from "./assets/pages/AddProduct/AddProduct";
import VehicleDetails from "./assets/pages/ProductDetails/VehicleDetails";
import UpdateProduct from "./assets/pages/UpdateProduct/UpdateProduct";
import PostTeam from "./assets/pages/PostTeam/PostTeam";
import Team from "./assets/pages/Team/Team";
import ManageTeam from "./assets/pages/ManageTeam/ManageTeam";
import UpdateTeam from "./assets/pages/UpdateTeam/UpdateTeam";



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
    {
      path: "/add-teammate",
      element: <PostTeam />,
    },
    {
      path: "/team",
      element: <Team />,
      loader: function(){
        return fetch(`http://localhost:3000/all-teammates`);
      }
    },

    {
      path: "/manage-teammate",
      element: <ManageTeam/>,
      loader: function () {
        return fetch(`http://localhost:3000/all-teammates`);
      },
    },



    {
      path: "/update-teammate/:id",
      element: <UpdateTeam/> ,
      loader: function({params}){
        return fetch(`http://localhost:3000/teammates/${params.id}`);
      },
    },






  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
