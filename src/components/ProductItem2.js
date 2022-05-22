import React from "react";

const ProductItem2 = () => {
  return (
    <div className="flex relative flex-col  rounded-lg shadow-lg hover:-translate-y-[1px]  cursor-pointer ">
      <div className="relative pt-[100%]">
        <img
          src="/img/image/hoa-sen.jpg"
          // src="/img/sp01.jpg"
          alt=""
          className="absolute top-0 left-0 right-0 object-cover w-full h-full "
        />
      </div>
      <div className="body-item font-medium text-lg mt-2">
        <p className="text-center text__over-1 text-c">"Tinh dầu tràm huế"</p>
        <div className="flex items-center justify-center gap-x-4 text-center text-base font-medium mt-2 mb-1">
          <div className="relative text-d ">
            <span>Tinh dầu</span>
            <span className=" text-[10px] absolute -top-2">đ</span>
          </div>
          <div className="relative text-[#bbb] ">
            <span className="line-through text-sm">500.000</span>
            <span className=" text-[10px] absolute -top-2">đ</span>
          </div>
        </div>
        <button className="py-2 text-base my-3 mx-auto  w-full max-w-[122px] bg-w text-d outline-none border border-d flex items-center justify-center">
          Mua hàng
        </button>
      </div>
      <div className="absolute top-0 -right-0 px-2  bg-e text-w text-xs w-10 h-10 flex flex-col justify-center items-center sale-item">
        <span>Giảm</span>
        <span>10%</span>
      </div>

      <div className="absolute top-0 -left-1 px-2 bg-d text-w text-xs border-r new-item">
        <span>New</span>
      </div>
    </div>
  );
};

export default ProductItem2;
