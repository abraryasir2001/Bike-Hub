import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './assets/pages/Home/Home';
import ContactUs from './assets/pages/ContactUs/ContactUs';
import ManageProducts from './assets/pages/ManageProducts/ManageProducts';
import AddProduct from './assets/pages/AddProduct/AddProduct';
import AddReview from './assets/pages/AddReview/AddReview';

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
      loader: function(){
        return fetch(`http://localhost:3000/all-vehicles`);
      },
    },
    {
      path: "/contact-us",
      element: <ContactUs/>
    },
    {
      path: "/manage-products",
      element: < ManageProducts/>,
      loader: function(){
        return fetch(`http://localhost:3000/all-vehicles`);
      },
    },
    {
      path: "/add-product",
      element: <AddProduct/>
    },
    {
      path: "/add-review",
      element: <AddReview/>
    },
  ]);
  

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App