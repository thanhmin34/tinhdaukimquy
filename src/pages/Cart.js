import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BuyWith from "../components/BuyWith";
const number = 3;
const Cart = () => {
  return (
    <>
      <div className="w-full flex flex-col max-w-[1280px] mx-auto px-[15px] md:px-3 lg:px-5 xl:px-8 md:flex-row md:gap-x-5">
        <div className="basis-full text-base font-semibold text-f md:basis-9/12  md:px-4">
          <h2 className="">
            Giỏ hàng của bạn có{" "}
            <span className="text-d">{number} sản phẩm</span>
          </h2>
          <div className="flex flex-col">
            <CartItem />
            <CartItem />
            <CartItem />
            <button className="mt-4 w-full max-w-[180px] px-2 py-2 border-d border outline-none rounded-lg text-d gap-x-[2px] hover:opacity-80 items-center justify-center flex">
              <AiOutlineArrowLeft />
              <span>Tiếp tục mua hàng</span>
            </button>
          </div>
        </div>
        <div className="basis-full mt-5 py-4 text-sm font-normal md:basis-3/12 md:px-4 ">
          <div className="hidden lg:flex items-center justify-between mb-5 ">
            <p className="text-[#57585a]">Tổng sản phẩm</p>
            <span className="text-base font-bold">{number}</span>
          </div>
          <div className="hidden lg:flex items-center justify-between mb-5 ">
            <p className="text-[#57585a]">Tổng tiền hàng</p>
            <span className="text-base font-bold">500.000đ</span>
          </div>
          <div className="hidden lg:flex items-center justify-between mb-5 ">
            <p className="text-[#57585a]">Phí ship</p>
            <span className="text-base font-bold">30.000đ</span>
          </div>
          <div className="flex items-center justify-between mb-5">
            <p className="text-[#57585a]">Thành tiền</p>
            <span className="text-base font-bold">2.520.240đ</span>
          </div>
          <div className="mx-10 border-b mb-4 mt-2"></div>
          <button className=" w-full max-w-[320px] md:max-w-full px-2 py-[12px] text-base font-bold bg-d border outline-none rounded-lg text-w gap-x-[2px] hover:opacity-80 items-center justify-center flex">
            Đặt Hàng
          </button>
        </div>
      </div>
      <BuyWith />
    </>
  );
};

function CartItem() {
  return (
    <div className="flex py-4 gap-x-2 border-b">
      <div className="flex">
        <img src="/img/image/massage-01.jpg" alt="" className="w-20" />
      </div>
      <div className="flex text-sm font-normal flex-1 flex-col gap-y-4">
        <p className="text__over-1">Muối thảo mộc ngâm chân Cung Đình</p>
        <div className="flex items-center border border-[#ccc] w-full max-w-[124px] text-base font-medium">
          <div className="px-4 py-2 cursor-pointer text-xl hover:opacity-80">
            -
          </div>
          <span className="px-4 py-2 flex-1 text-center mx-auto">1</span>
          <div className="px-4 py-2 cursor-pointer text-xl hover:opacity-80">
            +
          </div>
        </div>
      </div>
      <div className="flex px-4 py-2 text-xl text-c items-center justify-center">
        <MdDelete />
      </div>
    </div>
  );
}
export default Cart;
