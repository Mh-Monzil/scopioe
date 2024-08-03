import { Link } from "react-router-dom";

import logo from "../assets/images/LOGO.png";
import SideNav from "./SideNav";


const Sidebar = ({ isActive, handleToggle }) => {
  return (
    <div className="hidden md:flex flex-col min-w-[250px] border-x-[1px] border-[#E7E7E7] ">
      <div className=" flex items-center justify-between">
        {/* logo  */}
        <Link to={'/'} className="mx-auto md:mt-14">
          <img src={logo} alt=""  />
        </Link>
        {/* <IoClose onClick={handleToggle} className="md:hidden text-4xl text-black" /> */}
      </div>

      {/* Nav Items */}
      <div className="flex flex-col justify-between flex-1 md:mt-10">
        {/*  Menu Items */}
        <SideNav />
      </div>
    </div>
  );
};

export default Sidebar;
