import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import DonationDetails from "../Pages/DonationDetails";

  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("/public/donation.json"),

        },
        {
            path: "/donation",
            element: <Donation></Donation>
            
        },
        {
          path: "/donation-details/:id",
          element: <DonationDetails></DonationDetails>,
          loader: ()=> fetch("/public/donation.json"),

        },
        
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        }

      ]
    },
  ]);