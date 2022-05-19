import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu, BiPhone, BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderBottom = () => {
  const [show, setShow] = useState(false);
  const [scroll, SetScroll] = useState(false);

  const hanldeSetShow = () => {
    setShow(true);
  };
  useEffect(() => {
    const hanldeScroll = () => {
      if (window.scrollY > 300) {
        SetScroll(true);
      } else {
        SetScroll(false);
      }
    };
    window.addEventListener("scroll", hanldeScroll);

    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);

  return (
    <div
      className={`
       h-[70px] w-full  max-w-[1280px] mx-auto  flex items-center px-[15px] mb-5 bg-w md:justify-start md:px-6  xl:px-8 border-b`}
    >
      <button onClick={hanldeSetShow} className="text-2xl md:hidden z-10">
        <BiMenu />
      </button>
      <Link
        to="/"
        className=" mx-auto flex items-center justify-center  h-full md:justify-start md:flex-none md:mx-0"
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
        className={`${show ? "translate-x-0" : "-translate-x-full"} 
          fixed inset-0  md:-translate-x-0 transition-all duration-150 bg-w text-c  z-10 gap-y-5 pt-5  flex flex-col md:text-b md:flex-row md:pt-0 md:bg-[#fff]  md:static items-center md:gap-x-4 md:flex md:text-lg font-bold md:ml-5 lg:ml-6 xl:ml-10 lg:text-xl  lg:gap-x-5`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "relative link__header text-c py-1"
              : "text-c cursor-pointer"
          }
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/gioi-thieu"
          className={({ isActive }) =>
            isActive
              ? "relative link__header text-c py-1"
              : "text-c cursor-pointer"
          }
        >
          Giới Thiệu
        </NavLink>
        <NavLink
          to="/san-pham"
          className={({ isActive }) =>
            isActive
              ? "relative link__header text-c py-1"
              : "text-c cursor-pointer"
          }
        >
          Sản Phẩm
        </NavLink>

        <NavLink
          to="/bai-viet"
          className={({ isActive }) =>
            isActive
              ? "relative link__header text-c py-1"
              : "text-c cursor-pointer"
          }
        >
          Bài viết
        </NavLink>
        <NavLink
          to="/thanh-toan"
          className={({ isActive }) =>
            isActive
              ? "relative link__header text-c py-1"
              : "text-c cursor-pointer"
          }
        >
          Thanh Toán
        </NavLink>
        <NavLink
          to="/lien-he"
          className={({ isActive }) =>
            isActive
              ? "relative link__header text-c py-1"
              : "text-c cursor-pointer"
          }
        >
          Liên Hệ
        </NavLink>
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
  );
};

export default HeaderBottom;
