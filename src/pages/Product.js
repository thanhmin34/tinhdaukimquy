import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineCaretRight } from "react-icons/ai";
import ProductItem from "../components/ProductItem";

const Product = () => {
  return (
    <div className="w-full bg-[#f5f5f5]">
      <div className="w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto  pt-5 pb-10">
        <div className="flex items-center gap-x-2 text-[#666] text-sm">
          <Link to="/">Trang chủ</Link> <span>/</span>
          <p className="text-b">Sản phẩm</p>
        </div>

        <div className="flex mt-10 gap-x-5 w-full">
          <div className="basis-3/12 lg:basis-2/12 text-base p-2 hidden md:block">
            <div className="flex items-center gap-x-2 mb-5 border-b pb-4">
              <AiOutlineMenuUnfold />
              <h2 className="text-xl font-bold ">Danh mục</h2>
            </div>
            <ul className="flex flex-col gap-y-2 font-medium text-sm">
              <Liitem title="Tinh Dầu Tràm" />
              <Liitem title="Tinh Dầu Massage" />
              <Liitem title="Tinh Dầu Thiên Nhiên" />
              <Liitem title="Thảo Mộc Cung Đình" />
              <Liitem title="Sản Phẩm Đi Kèm" />
            </ul>
          </div>
          <div className="mb-20 basis-full md:basis-9/12 lg:basis-10/12 sm:grid-cols-3 grid grid-cols-2 md:grid-col-2 lg:grid-cols-4 xl:grid-cols-5 gap-[10px] p-2 ">
            {new Array(20).fill(0).map((item, index) => (
              <div key={index} className="bg-w">
                <ProductItem />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function Liitem({ title }) {
  const [show, setShow] = useState(false);
  return (
    <li className="flex items-center gap-x-1 py-2 ">
      <span className="text-[10px]">{show ? <AiOutlineCaretRight /> : ""}</span>
      <span>{title}</span>
    </li>
  );
}
export default Product;
