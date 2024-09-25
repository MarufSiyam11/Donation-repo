import { useState } from "react";
import logo from "../src/assets/img/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed w-full z-50">
      <header className="lg:px-16 px-4  flex flex-wrap items-center bg-white  shadow-md">
        <div className="flex-1 flex w-[120px] justify-between items-center">
          <Link to={"/"}>
            <img className="w-[120px]" src={logo} alt="" />
          </Link>
        </div>

        {/* Toggle button for small screens */}
        <label
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer md:hidden block"
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>

        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <Link to={"/"}>
                <li className="md:p-4 py-3 px-0 block font-bold" href="#">
                  Home
                </li>
              </Link>

              <Link to={"/Donaion"}>
                <li>
                  <a className="md:p-4 py-3 px-0 block font-bold" href="#">
                    Donation
                  </a>
                </li>
              </Link>
              <Link to={"/Static"}>
                <li>
                  <a className="md:p-4 py-3 px-0 block font-bold" href="#">
                    Statistics
                  </a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
