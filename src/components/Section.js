import React from "react";
import ProductItem from "./ProductItem";

const Section = ({ title }) => {
  return (
    <div className=" w-full max-w-[1280px] mx-auto px-[10px] md:px-4 lg:px-5 xl:px-8 mt-10">
      <h2 className="text-center text-4xl  xl:text-5xl font-bold text-c">
        {title}
      </h2>
      <div className="grid grid-cols-2 mt-10 sm:grid-cols-3 md:mt-20 xl:mt-24 gap-3 md:grid-cols-3 lg:grid-cols-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default Section;
