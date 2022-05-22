import React from "react";
import ProductItem from "./ProductItem";
import ProductItem2 from "./ProductItem2";

const BuyWith = () => {
  return (
    <div className="w-full max-w-[1280px] px-[15px] md:px-6 xl:px-8 mx-auto my-20 ">
      <h2 className="text-center text-3xl font-medium mb-10 lg:mb-20">
        CÓ THỂ BẠN THÍCH
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-10  mb-10 gap-y-5 lg:mb-20">
        <ProductItem2 />
        <ProductItem2 />
        <ProductItem2 />
        <ProductItem2 />
        <ProductItem2 />
        <ProductItem2 />
      </div>
      <div className="  mb-10 lg:mb-20">
        <img src="/img/slide/slide1.png" alt="" />
      </div>
    </div>
  );
};

export default BuyWith;
