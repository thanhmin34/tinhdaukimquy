import React, { useState } from "react";

const CheckOut = () => {
  const [shipcode, setShipCode] = useState(true);

  console.log("shipcode", shipcode);
  const hanldeChang = (e) => {
    setShipCode(!shipcode);
  };
  return (
    <div className="flex flex-col mx-auto mt-5 font-bold text-base">
      <div className="flex items-center my-2">
        <input
          type="radio"
          name="payment"
          onChange={hanldeChang}
          checked
          value={shipcode}
        />
        <span className="ml-2">Trả tiền mặt khi nhận hàng</span>
      </div>
      {/* <div className="flex items-center my-2">
        <input
          type="radio"
          //   value={shipcode}
          name="payment"
          onChange={hanldeChang}
        />
        <span className="ml-2">Chuyển khoản bằng ngân hàng</span>
      </div> */}
    </div>
  );
};

export default CheckOut;
