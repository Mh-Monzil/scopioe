import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineWindow } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { GrStatusInfo } from "react-icons/gr";
import { FaRegFileAlt, FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <nav className="w-full">
        {/* home  */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-[14px] py-[14px] pl-[25px] border-l-[3px] border-transparent ${
              isActive
                ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium"
                : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
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
              isActive
                ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium"
                : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
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
              isActive
                ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium"
                : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
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
              isActive
                ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium"
                : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
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
              isActive
                ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium"
                : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
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
              isActive
                ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium"
                : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
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
              isActive
                ? "bg-lightBlue text-realBlack border-l-navyBlue font-medium"
                : "text-darkAsh text-[15px] font-normal leading-normal tracking-[0.3px]"
            }`
          }
        >
          <IoSettingsOutline className="text-lg" />
          <span className="">Settings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNav;
