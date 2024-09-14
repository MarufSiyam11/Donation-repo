import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import DonationDetails from "./Pages/DonationDetails";
import DonationMoney from "./Pages/DonationMoney";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/DonationDetails/:id",
        element: <DonationDetails />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Donaion",
        element: <DonationMoney />,
      },
    ],
  },
]);
