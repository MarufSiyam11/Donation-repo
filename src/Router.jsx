import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import DonationDetails from "./Pages/DonationDetails";
import DonationMoney from "./Pages/DonationMoney";
import NotFoundPage from "./Pages/NotFoundPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage></NotFoundPage>,

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
      {
        path: "/Static",
        element: <NotFoundPage />,
      },
    ],
  },
]);
