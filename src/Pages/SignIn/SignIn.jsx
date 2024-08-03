import { LuEye, LuEyeOff } from "react-icons/lu";
import bgImg from "../../assets/images/login-bg.png";
import bgLarge from "../../assets/images/login-large.png";
import logo from "../../assets/images/LOGO.png";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";

const SignIn = () => {
  const { signInWithGoogle, loginUser } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isVisible, setIsVisible] = useState(false);

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

  const togglePassword = () => {
    setIsVisible(!isVisible);
  };

  // google sign in
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Sign In Successful");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value

    try {
      await loginUser(email, password)
      toast.success("Sign In Successful");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    
  }

  return (
    <div
      className={`h-screen grid grid-cols-1 lg:grid-cols-2 py-0 lg:py-20 lg:px-10 xl:px-[120px] `}
    >
      {/* left-part  */}
      <div
        style={{ backgroundImage: `url(${isSmallScreen ? bgImg : "none"})` }}
        className="h-full w-full bg-cover bg-no-repeat bg-center lg:pr-[122px]"
      >
        <img
          src={logo}
          alt=""
          className="w-28 mx-auto lg:mx-0 pt-16 lg:pt-0 pb-6"
        />

        <div id className="">
          <div className="lg:hidden text-center text-[#FFF] text-lg leading-normal max-w-[197px] mx-auto">
            <span className=" font-semibold">Sign In</span>
            <span className=" font-medium">
              {" "}
              to view all the massage therapists
            </span>
          </div>

          <div className=" w-full h-full bg-[#FFF] rounded-t-[40px] mt-16 lg:mt-0">
            <div className="pt-9 lg:pt-0 text-center lg:text-left">
              <h3 className="text-realBlack text-[28px] lg:text-3xl font-semibold leading-6 ">
                Log In To Your Account
              </h3>
              <p className="text-darkAsh text-sm font-normal mt-[18px] lg:mt-6 ">
                Welcome Back! Select a method to log in:
              </p>
            </div>

            <div className="flex items-center justify-center flex-shrink-0 gap-10 mt-16 lg:mt-10">
              <div
                onClick={handleGoogleSignIn}
                style={{
                  boxShadow: "0px 4px 7px 0px rgba(131, 131, 131, 0.23)",
                }}
                className="flex items-center justify-center gap-2 py-3 min-w-[146px] rounded-md bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF] cursor-pointer"
              >
                <FcGoogle className="text-2xl" />
                <span>Google</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-3 min-w-[146px] rounded-md bg-gradient-to-r from-[#298FFF] to-[#0778F5] text-[#FFF] font-Lexend cursor-pointer">
                <FaFacebookF className="text-xl" />
                <span className="">Facebook</span>
              </div>
            </div>

            <div className="border-t-[0.7px] border-[#E7E7E7] mt-[34px] lg:mt-[42px] mx-4 lg:mx-0 relative">
              <p className="text-darkAsh text-[12px] font-normal leading-normal px-2 bg-[#FFF] absolute left-1/2 -translate-x-1/2 -bottom-2">
                Or Continue with Email{" "}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-16 lg:mt-10 px-4 lg:p-0 space-y-6">
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
                  type={`${isVisible ? "text" : "password"}`}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="p-5  block w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] mt-3 focus:outline-Blue font-medium text-realBlack placeholder:text-darkAsh placeholder:font-normal
              "
                />
                <LuEye
                  onClick={() => togglePassword(!isVisible)}
                  className={`${
                    isVisible ? "visible" : "hidden"
                  } text-2xl text-darkAsh absolute right-3 bottom-[21px] cursor-pointer`}
                />
                <LuEyeOff
                  onClick={() => togglePassword(!isVisible)}
                  className={`${
                    isVisible ? "hidden" : "visible"
                  } text-2xl text-darkAsh absolute right-3 bottom-[21px] cursor-pointer`}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-Blue text-sm font-normal leading-[14px] tracking-[0.28px]">
                    Accept Term of Service
                  </span>
                </div>
                <p className="text-deepBlue underline text-[12px] font-medium leading-[14px] tracking-[0.24px]">
                  Forgot password?
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 pt-10">
                <input type="submit" value={"Sign in"} className="w-[271px] text-[#FFF] font-medium leading-normal px-10 py-4 bg-Blue rounded-[10px] active:bg-deepBlue" />
                <p className="text-[#142D3A] text-[14px] font-normal leading-[14px] tracking-[0.28px] pb-12">
                  Don’t Have an Account?{" "}
                  <Link
                    to="/sign-up"
                    className="text-deepBlue underline font-medium "
                  >
                    Create Account
                  </Link>
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
          <span className="text-deepBlue  font-semibold">Sign In </span>
          <span className="text-[#FFF] font-medium">
            to view all the message therapists
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
