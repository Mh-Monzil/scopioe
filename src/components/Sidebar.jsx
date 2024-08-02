import { Link, NavLink } from "react-router-dom";
import { IoClose, IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import logo from "../assets/images/LOGO.png";
import { MdOutlineWindow } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { GrStatusInfo } from "react-icons/gr";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaRegFileAlt, FaRegHeart } from "react-icons/fa";

const Sidebar = ({ isActive, handleToggle }) => {
  return (
    <div className=" min-w-[250px] flex flex-col">
      <div className=" flex items-center justify-between">
        {/* logo  */}
        <img src={logo} alt="" className="mx-auto md:mt-16" />
        {/* <IoClose onClick={handleToggle} className="md:hidden text-4xl text-black" /> */}
      </div>

      {/* Nav Items */}
      <div className="flex flex-col justify-between flex-1 md:mt-10">
        {/*  Menu Items */}
        <nav className="w-full">
          {/* home  */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-[14px] py-[14px] pl-[25px] border-l-[3px] border-transparent ${
                isActive ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium" : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
              }`
            }
          >
            <MdOutlineWindow className="text-lg" />
            <span className="">Home</span>
          </NavLink>

          {/* New Listings */}
          <NavLink
            to="/new-listing"
            className={({ isActive }) =>
              `flex items-center gap-[14px] py-[14px] pl-[25px] border-l-[3px] border-transparent  ${
                isActive ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium" : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
              }`
            }
          >
            <FiUsers className="text-lg" />
            <span className="">New Listing</span>
          </NavLink>

          {/* search  */}
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex items-center gap-[14px] py-[14px] pl-[25px] border-l-[3px] border-transparent ${
                isActive ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium" : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
              }`
            }
          >
            <IoSearchOutline className="text-lg" />
            <span className="">Search</span>
          </NavLink>

          {/* about  */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-[14px] py-[14px] pl-[25px] border-l-[3px] border-transparent ${
                isActive ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium" : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
              }`
            }
          >
            <FaRegFileAlt className="text-lg" />
            <span className="">About</span>
          </NavLink>

          {/* favorites  */}
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `flex items-center gap-[14px] py-[14px] pl-[25px] border-l-[3px] border-transparent ${
                isActive ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium" : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
              }`
            }
          >
            <FaRegHeart className="text-lg" />
            <span className="">Favorites</span>
          </NavLink>

          {/* Help Center  */}
          <NavLink
            to="/help-center"
            className={({ isActive }) =>
              `flex items-center gap-[14px] py-[14px] pl-[25px] border-l-[3px] border-transparent ${
                isActive ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium" : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
              }`
            }
          >
            <GrStatusInfo className="text-lg" />
            <span className="">Help Center</span>
          </NavLink>

          {/* Settings  */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-[14px] py-[14px] pl-[25px] border-l-[3px] border-transparent ${
                isActive ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium" : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
              }`
            }
          >
            <IoSettingsOutline className="text-lg" />
            <span className="">Settings</span>
          </NavLink>

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
