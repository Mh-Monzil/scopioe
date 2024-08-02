import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { IoMenu } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Root = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="font-Poppins max-w-[1440px] mx-auto flex">
      <Sidebar isActive={isActive} handleToggle={handleToggle} />
      {/* outlet --> dynamic content  */}
      <div
        className={`flex-1 `}
      >
        <nav className="flex items-center justify-between p-3 px-6 bg-primarySlate text-white">
          <IoMenu onClick={handleToggle} className="text-4xl cursor-pointer" />
          <div className="flex gap-3">
            <IoMdNotifications className="text-[26px]" />
            <FaUserCircle className="text-2xl" />
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
