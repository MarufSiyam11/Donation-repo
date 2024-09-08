import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Home from "./Pages/Home";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
