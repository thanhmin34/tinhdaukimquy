import React from "react";
import { BiPhone } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { FiMail } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import HeaderBottom from "./HeaderBottom";
const Header = () => {
  return (
    <>
      <div className="hidden w-full   h-10 leading-10  bg-[#68b943] md:flex  text-w">
        <div className="flex items-center justify-between w-full px-[15px]  md:px-6  xl:px-8  max-w-[1280px] mx-auto">
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

      <HeaderBottom />
    </>
  );
};

export default Header;
