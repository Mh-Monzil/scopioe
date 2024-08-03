import { IoIosArrowDown } from "react-icons/io";
import loggedUser from "../assets/User/loggedUser.svg";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { CgLogOut } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="bg-[#FFF] border-b-[1px] border-[#E7E7E7] min-h-[60px] md:min-h-[88px] flex items-center justify-between">
      {/* left  */}
      <div className="flex items-center gap-3 py-6 pl-[30px]">
        <img src={loggedUser} alt="" className="w-10 h-10" />
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-realBlack text-[15px] font-medium leading-normal tracking-[0.3px]">
              sagar soni
            </h3>
            <IoIosArrowDown className="text-sm" />
          </div>
          <p className="text-darkAsh text-[14px] font-normal leading-normal tracking-[0.28px]">
            sagar@gmail.com
          </p>
        </div>
      </div>

      {/* right  */}
      <div className="flex items-center h-10">
        <div className="rounded-full border-[1px] mr-5">
          <IoNotificationsOutline className="text-[21px]  m-2" />
        </div>
        <div className="flex items-center gap-[10px] border-l-[1px] border-l-[#E7E7E7] pl-5">
          <span className="text-[#F15E4A] text-[15px] font-medium leading-normal tracking-[0.3px]">
            Log Out
          </span>
          <div className="bg-[#FFECEA] p-2 rounded-full">
            <CgLogOut className="text-[#F15E4A] text-[21px] rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
