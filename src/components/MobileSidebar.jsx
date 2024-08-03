import SideNav from "./SideNav";
import loggedUser from "../assets/User/loggedUser.svg";
import { IoClose } from "react-icons/io5";

const MobileSidebar = ({ toggleMenu, position, setPosition }) => {
  return (
    <div
      className={`w-[270px] md:hidden absolute ${
        position ? "right-0" : "-right-96"
      } top-0 z-10 transition-all duration-300 ease-in-out`}
    >
      <IoClose
        onClick={() => setPosition(!position)}
        className="text-[#FFF] absolute right-0 text-3xl m-3 cursor-pointer active:bg-blue-700 active:rounded-full"
      />
      {/* profile  */}
      <div className="bg-deepBlue h-[302px]">
        <div className="h-full flex flex-col items-center justify-center">
          <img src={loggedUser} alt="" className="w-[74px]" />
          <h3 className="text-[#FFF] text-2xl font-semibold leading-normal mt-3">
            Sagar Soni
          </h3>
          <p className="text-blueBlack text-sm font-normal leading-normal tracking-[0.24px] mt-1">
            sagar@gmail.com
          </p>
        </div>
      </div>

      {/* sidenav  */}
      <SideNav />
    </div>
  );
};

export default MobileSidebar;
