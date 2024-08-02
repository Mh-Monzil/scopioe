import { LuEye, LuEyeOff } from "react-icons/lu";
import bgImg from "../../assets/images/login-bg.png";
import logo from "../../assets/images/LOGO.png";

const SignUp = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-screen w-full  bg-cover bg-no-repeat bg-center"
    >
      <img src={logo} alt="" className="w-28 mx-auto pt-16 pb-6" />
      <div className="hidden px-6 pt-2 max-w-[430px] mx-auto">
        <h2 className="text-blueBlack text-[28px] font-semibold leading-normal text-center md:text-left">
          Sign In To Your Account
        </h2>
        <p className="text-darkAsh mx-auto font-normal leading-6 text-center py-3 md:text-left ">
          Welcome Back! By click the sign up button, you&#39;re agree to
          Zenitood Terms and Service and acknowledge the{" "}
          <span className="text-Blue underline">Privacy and Policy</span>
        </p>
      </div>
      <div className="hidden text-center text-[22px] leading-[35px] max-w-[341px] mx-auto px-[35px] py-[30px] mt-20 bg-[#1F2833] opacity-70 rounded-[10px]">
        <span className="text-deepBlue  font-semibold  block">
          Create Account
        </span>
        <span className="text-[#FFF] font-medium block">
          Fill in Your Information
        </span>
      </div>

      {/* animated div  */}
      <div>
        <div className="text-center text-[#FFF] text-lg leading-normal">
          <span className="block font-semibold">Create Account</span>
          <span className="block font-medium">Fill in Your Information</span>
        </div>

        <div className="w-full min-h-[680px] bg-[#FFF] rounded-t-[40px] mt-20">
          <h3 className="text-blueBlack text-[28px] font-semibold leading-normal pt-8 text-center">
            Sign Up
          </h3>

          <form className="p-4 space-y-6">
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
  );
};

export default SignUp;
