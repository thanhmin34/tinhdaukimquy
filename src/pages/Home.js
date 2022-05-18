import React from "react";
import Slider from "../components/Slider";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Section from "../components/Section";
const Home = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        grabCursor={"true"}
        slidesPerView={"auto"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // navigation
        pagination={{ clickable: true }}
      >
        {slides.length > 0 &&
          slides.map((item) => (
            <SwiperSlide key={item.id}>
              <Slider item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <Info />
      <Banner img="https://tinhdaukimvui.com.vn/wp-content/uploads/2020/04/tinh-dau-tram-125ml.jpg" /> */}

      <Section title="Sản Phẩm Bán Chạy" />

      <div className="grid grid-cols-2 w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto gap-5 my-16">
        <div className="flex">
          <img
            src="/img/slide/slide1.png"
            alt=""
            className="border-relex-btn"
          />
        </div>
        <div className="flex">
          <img
            src="/img/slide/slide1.png"
            alt=""
            className="border-relex-btn"
          />
        </div>
      </div>
      <Section title="Sản Phẩm Mới Nhất" />

      <div className="w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto gap-5 my-16">
        <div className="w-full my-5">
          <img
            src="/img/slide/slide1.png"
            alt=""
            className="border-relex-btn"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="flex">
            <img
              src="/img/slide/slide1.png"
              alt=""
              className="border-relex-btn"
            />
          </div>
          <div className="flex">
            <img
              src="/img/slide/slide1.png"
              alt=""
              className="border-relex-btn"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const slides = [
  {
    id: 1,
    img: "/img/slide/slide1.png",
  },
  {
    id: 2,
    img: "/img/slide/slide2.png",
  },
  {
    id: 3,
    img: "/img/slide/slide3.png",
  },
];

function Banner({ img }) {
  return (
    <div className="w-full my-10 md:my-16 xl:my-20">
      <img src={img} alt="" />
    </div>
  );
}

function Info() {
  return (
    <div className=" w-full max-w-[1280px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-5 text-[#333]">
      <h1 className="text-center text-5xl font-bold  mb-3">Giới Thiệu</h1>
      <p className="text-lg font-bold text-center px-4">
        Tinh dầu Tràm Huế Kim Vui – Chất lượng tạo nên sự khác biệt
      </p>
      <div className="flex flex-col mt-10  ">
        <div className="flex flex-col font-bold text-base">
          <span className="text-xl font-bold px-6 text-">Về chúng tôi</span>
          <p className="text-justify text-[15px] font-normal mb-4">
            Từ thời vua chúa xa xưa, dầu tràm xứ Huế đã đi vào tiềm thức người
            Việt như một loại dược liệu xức ngoài da tốt số một, một thứ biệt
            dược có thể dùng cho cả làn da non nớt, mẫn cảm nhất như trẻ sơ
            sinh. Để gìn giữ tinh túy đó của ông cha, tinh dầu Kim Vui được kiến
            tạo từ những năm 2000 với mục tiêu hòa quyện tinh hoa truyền thống
            với dòng chảy thời đại để cho ra đời sản phẩm tinh dầu thiên nhiên
            chất lượng uy tín nhất.
          </p>

          <button className="flex items-center justify-center w-full max-w-[132px] px-4 py-[6px] bg-[#68b943] text-w rounded-2xl">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
