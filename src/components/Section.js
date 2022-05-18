import React from "react";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss";
const Section = ({ title }) => {
  return (
    <div className=" w-full max-w-[1280px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-10">
      <h2 className="text-center text-4xl  xl:text-5xl font-bold text-c ">
        {title}
      </h2>
      <div className=" py-10">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={6}
          breakpoints={{
            1240: {
              minWidth: 1240,
              slidesPerView: 6,
            },
            1000: {
              minWidth: 1000,
              slidesPerView: 5,
            },

            678: {
              minWidth: 678,
              slidesPerView: 4,
            },
            320: {
              minWidth: 300,
              slidesPerView: 2,
            },
            500: {
              minWidth: 500,
              slidesPerView: 3,
            },
          }}
        >
          {new Array(20).fill(0).map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section;

// breakpoints={{
//   1240: {
//     minWidth: 1240,
//     slidesPerView: 4,
//   },

//   678: {
//     minWidth: 678,
//     slidesPerView: 3,
//   },
//   320: {
//     minWidth: 300,
//     slidesPerView: 2,
//   },
// }}
