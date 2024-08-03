import FeaturedTestimonial from "../../components/Home/FeaturedTestimonial";
import PopularCities from "../../components/Home/PopularCities";
import SearchTherapist from "../../components/Home/SearchTherapist";

const Home = () => {
  return (
    <div className="w-full bg-[#EEF2F5] px-0 py-3 lg:p-[30px]">
      <SearchTherapist />
      <div className="flex flex-col lg:flex-row justify-between gap-[30px]">
        <div>
          <FeaturedTestimonial />
        </div>
        <div className="flex-1">
          <PopularCities />
        </div>
      </div>
    </div>
  );
};

export default Home;
