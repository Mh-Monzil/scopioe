import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const FeaturedTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("./testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  console.log(testimonials);

  return (
    <div className="w-full max-w-[430px] sm:max-w-[550px] mx-auto mt-7 ">
      <h3 className="text-realBlack text-lg font-medium leading-[30px]">Featured Testimonial</h3>
      <div className="p-[30px] pb-3 bg-[#FFF] rounded-[10px] mt-[18px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="mb-12 space-y-4">
                <div className="flex items-center bg-white border-[1px] border-[#E7E7E7] p-[10px] rounded-[10px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[130px] h-[140px] rounded-lg mr-6"
                  />
                  <div>
                    <p className="text-darkAsh text-sm font-normal leading-normal tracking-[0.26px]">
                      {testimonial.address}
                    </p>
                    <h3 className="text-Black2 text-[14px] font-medium leading-[30px]">
                      {testimonial.title} <span className="text-deepBlue italic font-semibold">by cort</span>
                    </h3>
                    <p className="text-sm text-darkAsh font-normal leading-6 tracking-[0.26px]">
                      {testimonial.description}<span className="text-deepBlue font-medium">Read More</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-white border-[1px] border-[#E7E7E7] p-[10px] rounded-[10px]">
                  <img
                    src={testimonial.image2}
                    alt={testimonial.name2}
                    className="w-[130px] h-[140px] rounded-lg mr-6"
                  />
                  <div>
                    <p className="text-darkAsh text-sm font-normal leading-normal tracking-[0.26px]">
                      {testimonial.address2}
                    </p>
                    <h3 className="text-Black2 text-[14px] font-medium leading-[30px]">
                      {testimonial.title2} <span className="text-deepBlue italic font-semibold">by cort</span>
                    </h3>
                    <p className="text-sm text-darkAsh font-normal leading-6 tracking-[0.26px]">
                      {testimonial.description2}<span className="text-deepBlue font-medium">Read More</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedTestimonial;
