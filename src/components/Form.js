import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("trường này là bắt buộc"),
  email: yup.string().email().required("trường này là bắt buộc"),
  address: yup.string().required("trường này là bắt buộc"),
  wart: yup.string().required("trường này là bắt buộc"),
  city: yup.string().required("trường này là bắt buộc"),
  province: yup.string().required("trường này là bắt buộc"),
  phone: yup
    .number()
    .required("vui lòng nhập SĐT")
    .typeError("Đó không phải là số điện thoại")
    .positive("Số điện thoại không được bắt đầu bằng dấu trừ")
    .integer("Số điện thoại không được bao gồm phân tích thập phân")
    .min(10),
});
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const pro = [
      {
        ...data,
        products: {
          name: "tinh dau tram",
          price: 5000,
          quantity: 2,
        },
      },
    ];
    console.log(pro);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className=" w-full  max-w-[360px] mx-auto"
    >
      <div className="py-2">
        <input
          type="text"
          name="name"
          {...register("name")}
          className="my-2 px-2 py-2 border border-[#d1d1d1] w-full outline-none focus:border-d"
          placeholder="Họ tên*"
        />
        <span className="text-[#cc4242] font-medium text-base">
          {errors?.name?.message || ""}
        </span>
      </div>
      <div className="flex flex-col gap-x-2">
        <div className="flex flex-col">
          <input
            type="number"
            name="phone"
            {...register("phone")}
            className="my-2 px-2 py-2 border md:w-[50%] border-[#d1d1d1] outline-none focus:border-d"
            placeholder="Số điện thoại"
          />
          <span className="text-[#cc4242] font-medium text-base">
            {errors?.phone?.message || ""}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            {...register("email")}
            className="my-2 px-2 py-2 border md:w-[50%] border-[#d1d1d1] outline-none focus:border-d"
            placeholder="Địa chỉ email"
          />
          <span className="text-[#cc4242] font-medium text-base">
            {errors?.email?.message || ""}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-x-2">
        <div className="flex flex-col">
          <input
            type="text"
            name="address"
            {...register("address")}
            className="my-2 px-2 py-2 border md:w-[50%] border-[#d1d1d1] outline-none focus:border-d"
            placeholder="Địa chỉ giao hàng"
          />
          <span className="text-[#cc4242] font-medium text-base">
            {errors?.address?.message || ""}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="wart"
            {...register("wart")}
            className="my-2 px-2 py-2 border md:w-[50%] border-[#d1d1d1] outline-none focus:border-d"
            placeholder="Phường, Xã"
          />
          <span className="text-[#cc4242] font-medium text-base">
            {errors?.wart?.message || ""}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-x-2">
        <div className="flex flex-col">
          <input
            type="text"
            name="city"
            {...register("city")}
            className="my-2 px-2 py-2 border md:w-[50%] border-[#d1d1d1] outline-none focus:border-d"
            placeholder="Thành phố/Huyện"
          />
          <span className="text-[#cc4242] font-medium text-base">
            {errors?.city?.message || ""}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="province"
            {...register("province")}
            className="my-2 px-2 py-2 border md:w-[50%] border-[#d1d1d1] outline-none focus:border-d"
            placeholder="Tỉnh"
          />
          <span className="text-[#cc4242] font-medium text-base">
            {errors?.province?.message || ""}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="outline-none border-none bg-d py-2 text-w px-8 rounded hover:opacity-80 mt-4"
      >
        Đặt Hàng
      </button>
    </form>
  );
};

export default Form;
