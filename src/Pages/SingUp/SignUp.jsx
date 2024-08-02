import { LuEye, LuEyeOff } from "react-icons/lu";
import bgImg from "../../assets/images/login-bg.png";
import bgLarge from "../../assets/images/login-large.png";
import logo from "../../assets/images/LOGO.png";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      console.log(window.innerWidth, window.innerHeight);
    };

    // Add event listener to update state on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [overflow, setOverflow] = useState("");
  const [position, setPosition] = useState("-left-[1024px]");
  const [textHidden, setTextHidden] = useState("right-0");


  const animateForm = () => {
    console.log("animating");
    setOverflow("overflow-y-visible")
    setPosition("left-0")
    setTextHidden("hidden")
  }

  return (
    <div className={`h-screen grid grid-cols-1 lg:grid-cols-2 py-0 lg:py-20 lg:px-10 xl:px-[120px] relative overflow-hidden ${overflow}`}>
      {/* left-part  */}
      <div
        style={{ backgroundImage: `url(${isSmallScreen ? bgImg : "none"})` }}
        className="h-full w-full bg-cover bg-no-repeat bg-center lg:pr-[122px]"
      >
        <img src={logo} alt="" className="w-28 mx-auto lg:mx-0 pt-16 lg:pt-0 pb-6" />
        <div className={`${textHidden} lg:block px-6 lg:px-0 pt-2 max-w-[430px] mx-auto lg:mx-0`}>
          <h2 className="text-blueBlack text-[28px] lg:text-3xl font-semibold leading-normal text-center lg:text-left">
            Sign In To Your Account
          </h2>
          <p className="text-lightAsh lg:text-darkAsh mx-auto font-normal leading-6 lg:leading-7 text-center py-3 lg:pb-0 lg:text-left ">
            Welcome Back! By click the sign up button, you&#39;re agree to
            Zenitood Terms and Service and acknowledge the{" "}
            <span className="text-Blue underline">Privacy and Policy</span>
          </p>
        </div>
        <div className={`${textHidden} text-center text-[22px] leading-[35px] max-w-[341px] mx-auto px-[35px] py-[30px] mt-20 bg-[#1F2833] opacity-70 rounded-[10px]`}>
          <span onClick={() => animateForm()} className="text-deepBlue font-semibold block cursor-pointer">
            Create Account
          </span>
          <span className="text-[#FFF] font-medium block">
            Fill in Your Information
          </span>
        </div>

        {/* animated div  */}
        <div id className={`absolute w-full top-32 ${position} lg:static duration-500 transition-all ease-in-out`}>
          <div className=" lg:hidden text-center text-[#FFF] text-lg leading-normal">
            <span className="block font-semibold">Create Account</span>
            <span className="block font-medium">Fill in Your Information</span>
          </div>

          <div className=" w-full min-h-[680px] bg-[#FFF] rounded-t-[40px] mt-20 lg:mt-10">
            <h3 className="lg:hidden text-blueBlack text-[28px] font-semibold leading-normal pt-8 text-center">
              Sign Up
            </h3>

            <form className="p-4 lg:p-0 space-y-6">
              {/* name  */}
              <div>
                <label
                  htmlFor="name"
                  className="text-realBlack font-medium leading-[14px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="@username"
                  className="p-5  block w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] mt-3 focus:outline-Blue font-medium text-realBlack placeholder:text-darkAsh placeholder:font-normal
              "
                />
              </div>
              {/* email  */}
              <div>
                <label
                  htmlFor="email"
                  className="text-realBlack font-medium leading-[14px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="p-5  block w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] mt-3 focus:outline-Blue font-medium text-realBlack placeholder:text-darkAsh placeholder:font-normal
              "
                />
              </div>
              {/* password  */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="text-realBlack font-medium leading-[14px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="p-5  block w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] mt-3 focus:outline-Blue font-medium text-realBlack placeholder:text-darkAsh placeholder:font-normal
              "
                />
                <LuEye className="text-2xl text-darkAsh absolute right-3 bottom-[21px]" />
                <LuEyeOff className="hidden text-2xl text-darkAsh absolute right-3 bottom-[21px]" />
              </div>
              {/* confirm password  */}
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="text-realBlack font-medium leading-[14px]"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Re-type password"
                  className="p-5  block w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] mt-3 focus:outline-Blue font-medium text-realBlack placeholder:text-darkAsh placeholder:font-normal
              "
                />
                <LuEye className="hidden text-2xl text-darkAsh absolute right-3 bottom-[21px]" />
                <LuEyeOff className="text-2xl text-darkAsh absolute right-3 bottom-[21px]" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-Blue text-sm font-normal leading-[14px] tracking-[0.28px]">
                  Accept Term of Service
                </span>
              </div>
              <div className="flex flex-col items-center space-y-3 pt-10">
                <button className="w-[271px] text-[#FFF] font-medium leading-normal px-10 py-4 bg-Blue rounded-[10px] active:bg-deepBlue">
                  Sign up
                </button>
                <p className="text-realBlack font-normal leading-6">
                  Already Have an Account?{" "}
                  <span className="text-deepBlue underline font-medium ">
                    Log in
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* right part  */}
      <div
        style={{ backgroundImage: `url(${bgLarge})` }}
        className="hidden bg-no-repeat bg-center bg-cover lg:flex justify-center items-center h-full 2xl:w-[648px] rounded-2xl"
      >
        <div className=" text-center text-[22px] leading-[35px] max-w-[341px] mx-auto px-[35px] py-[30px] mt-20 bg-[#1F2833] opacity-70 rounded-[10px]">
          <span className="text-deepBlue  font-semibold  block">
            Create Account
          </span>
          <span className="text-[#FFF] font-medium block">
            Fill in Your Information
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
