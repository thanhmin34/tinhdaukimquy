import React from "react";
import PropTypes from "prop-types";
const ProductItem = ({ item }) => {
  // console.log(item);
  return (
    <div className="flex relative flex-col p-1 rounded-lg shadow-lg hover:-translate-y-[1px]  cursor-pointer ">
      <div className="relative pt-[100%]">
        <img
          src="/img/sp01.jpg"
          alt=""
          className="absolute top-0 left-0 right-0 object-cover w-full h-full"
        />
      </div>
      <div className="body-item font-medium text-lg mt-2">
        <p className="text-center text__over-1">Tinh dầu tràm huế</p>
        <div className="flex items-center justify-center gap-x-4 text-center text-base font-medium mt-2 mb-1">
          <div className="relative text-d ">
            <span>500.000</span>
            <span className=" text-[10px] absolute -top-2">đ</span>
          </div>
          <div className="relative text-[#bbb] ">
            <span className="line-through text-sm">500.000</span>
            <span className=" text-[10px] absolute -top-2">đ</span>
          </div>
        </div>
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

ProductItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default ProductItem;
