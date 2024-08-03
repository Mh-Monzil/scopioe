import searchBoxImg from "../../assets/images/searchboximg.png";
import searchBoxVector from "../../assets/images/searchvector.png";

const SearchTherapist = () => {
  return (
    <div className="bg-[#FFF] p-4 md:p-[30px] rounded-[10px]  flex flex-col lg:flex-row lg:items-center justify-between lg:gap-20">
      {/* left part */}
      <div className="flex-1 max-w-[490px]">
        <h3 className="text-realBlack text-lg md:text-xl font-medium leading-[30px]">
          I&#39;m Looking for Massage Therapist Near...
        </h3>
        <p className="text-[14px] md:text-[15px] font-normal md:font-medium tracking-[0.14px] md:tracking-[0.15px] ">
          In using this site, I agree to be bound by the{" "}
          <span className="text-deepBlue">Terms of Service </span> and
          <span className="text-deepBlue"> Privacy Policy</span>
        </p>

        {/* search box  */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-[10px] max-w-[470px] mt-[30px]">
          <input
            type="text"
            placeholder="ZIP code or city name"
            className="flex-grow bg-transparent p-5 text-realBlack placeholder:darkAsh outline-none"
          />
          <button className="bg-deepBlue text-white px-8 py-3 m-1 rounded-lg hover:bg-blue-700 focus:outline-none">
            GO
          </button>
        </div>
      </div>

      {/* right part  */}
      <div
        style={{ backgroundImage: `url(${searchBoxVector})` }}
        className="flex-1 bg-left bg-no-repeat mt-14 lg:mt-0"
      >
        <img src={searchBoxImg} alt="" className="ml-auto" />
      </div>

      {/* search box mobile */}
      <div className="lg:hidden mt-10 flex items-center bg-gray-100 rounded-[10px] max-w-[470px]">
        <input
          type="text"
          placeholder="ZIP code or city name"
          className="flex-grow bg-transparent p-5 text-realBlack placeholder:darkAsh outline-none"
        />
        <button className="bg-deepBlue text-white px-8 py-3 m-1 rounded-lg hover:bg-blue-700 focus:outline-none">
          GO
        </button>
      </div>
    </div>
  );
};

export default SearchTherapist;
