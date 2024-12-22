import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import s1 from "../assets/slider-1-01.jpg";
import s2 from "../assets/slider-2-01.jpg";
import s3 from "../assets/slider-3-01.jpg";

import { MdOutlineExplore } from "react-icons/md";
const Banner = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className=" rounded-xl relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Adjust depending on screen size
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Slide change delay in milliseconds
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide>
          <div>
            <img
              className="rounded-xl object-cover w-full   "
              src={s1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="rounded-xl object-cover " src={s2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="rounded-xl object-cover " src={s3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="hidden absolute inset-0  md:flex lg:bottom-16 md:bottom-12 items-end justify-center text-center z-10  pointer-events-none">
        <button
          onClick={() => scrollToSection("product")}
          className="btn lg:text-xl btn-sm lg:btn-md  bg-primary  text-white pointer-events-auto hover:bg-secondary border-none"
        >
          <MdOutlineExplore />
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
