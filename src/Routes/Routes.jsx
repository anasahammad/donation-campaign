import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";

  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,

        },
        {
            path: "/donation",
            element: <Donation></Donation>
        }
        ,
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        }

      ]
    },
  ]);