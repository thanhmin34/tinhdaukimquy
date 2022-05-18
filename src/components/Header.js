import React, { useState } from "react";
import { BiMenu, BiPhone, BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  const [show, setShow] = useState(false);

  const hanldeSetShow = () => {
    // console.log(123);
    setShow(true);
  };

  return (
    <>
      <div className="hidden w-full   h-10 leading-10  bg-[#68b943] md:flex  text-w">
        <div className="flex items-center justify-between w-full  md:px-4 lg:px-5 xl:px-8  max-w-[1280px] mx-auto">
          <div className="cursor-pointer flex gap-x-5">
            <div className="flex items-center gap-x-2">
              <BiPhone />
              <a href="tel:+0934898552">0934 898 552</a>
            </div>
            <div className="flex items-center gap-x-2">
              <FiMail />
              <a href="mailto:tinhdaukimvui@gmail.com">
                tinhdaukimvui@gmail.com
              </a>
            </div>
          </div>

          <div className="flex  gap-x-4 ">
            <div className="flex items-center">
              <span className="text-base leading-[16px] mr-2">Login</span>
              <AiOutlineUser />
            </div>
            <div className="flex relative ">
              <HiOutlineShoppingBag />
              <div className="absolute bg-w -top-[6px] -right-[10px]  w-4 h-4 text-xs flex items-center justify-center rounded-full">
                <span className="text-b">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[70px] w-full  max-w-[1280px] mx-auto  flex items-center px-[10px] mb-5 bg-w md:justify-start md:px-4 lg:px-5 xl:px-8 ">
        <button onClick={hanldeSetShow} className="text-2xl md:hidden z-10">
          <BiMenu />
        </button>
        <Link
          to="/"
          className="flex-1 ml-auto flex items-center justify-center  h-full md:justify-start md:flex-none md:ml-0"
        >
          <img
            src="https://tinhdaukimvui.com.vn/wp-content/uploads/2019/08/logo-kimvui.png"
            alt=""
            className="h-full"
          />
        </Link>
        <div className="cart text-xl relative  rounded-full w-6 h-6 flex items-center justify-center text-w bg-d md:hidden">
          <HiOutlineShoppingBag />
          <div className="absolute bg-d -top-[6px] -right-[6px] w-[16px] h-[16px] text-xs flex items-center justify-center rounded-full">
            <span className="text-w">5</span>
          </div>
        </div>
        <div
          className={`${
            show ? "translate-x-0" : "-translate-x-full"
          } fixed inset-0  md:-translate-x-0 transition-all duration-150 bg-secondary text-w  z-10 gap-y-5 pt-5  flex flex-col md:text-b md:flex-row md:pt-0 md:bg-[#fff]  md:static items-center md:gap-x-4 md:flex md:text-lg font-bold md:ml-5 lg:ml-8 xl:ml-10 lg:text-xl  lg:gap-x-5`}
        >
          <span className="cursor-pointer">Trang chủ</span>
          <span className="cursor-pointer">Giới Thiệu</span>
          <span className="cursor-pointer">Sản Phẩm</span>
          <span className="cursor-pointer">Tin Tức</span>
          <span className="cursor-pointer">Bài viết</span>
          <span className="cursor-pointer">Liên Hệ</span>
          <button
            onClick={() => setShow(false)}
            className="md:hidden absolute top-2 right-2 px-2 py-2"
          >
            X
          </button>
        </div>
        <div className=" items-center hidden md:flex border input-wrapper border-[#ccc] px-2 py-2  text-xl md:rounded-lg ld:rounded-xl md:ml-auto">
          <input
            type="text"
            className="px-2 hidden lg:flex outline-none border-none text-base inputelement "
            placeholder="Tìm kiếm..."
          />
          <BiSearch />
        </div>
      </div>
    </>
  );
};

export default Header;
