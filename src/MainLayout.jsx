import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Pages/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
