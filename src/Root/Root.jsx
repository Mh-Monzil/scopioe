import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Root = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="font-Poppins max-w-[1440px] mx-auto flex">
      <Sidebar isActive={isActive} handleToggle={handleToggle} />
      <div
        className={`flex-1 `}
      >
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
