import React from "react";
import BuyWith from "../components/BuyWith";

const ProductDetail = () => {
  return (
    <>
      <div className="w-full max-w-[1280px] px-[15px] md:px-6  xl:px-8 mx-auto mt-10">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-10">
          <div className="flex flex-col lg:flex-row  ">
            <div className=" w-full lg:basis-9/12 ">
              <img
                className="w-full object-cover"
                alt=""
                src="/img/image/hoa sen 2-01.jpg"
              />
            </div>

            <div className="flex  lg:basis-3/12 lg:gap-y-[3.88%] x2:gap-y-[4.88%]  gap-x-[4%] mt-2 flex-1 lg:flex-col lg:mt-0 lg:ml-5">
              <div className="flex w-[32%] lg:w-[90%]  ">
                <img alt="" src="/img/image/hoa sen 2-01.jpg" />
              </div>
              <div className="flex w-[32%] lg:w-[90%]  ">
                <img alt="" src="/img/image/hoa sen 2-01.jpg" />
              </div>
              <div className="flex w-[32%] lg:w-[90%]  ">
                <img alt="" src="/img/image/hoa sen 2-01.jpg" />
              </div>
            </div>
          </div>
          <div className="body">
            <div className="flex flex-col mt-3 text-base  font-semibold px-2 gap-y-3">
              <h2 className="text-xl text-center uppercase font-medium">
                Tinh Dau Tram Hue
              </h2>
              <div className="flex items-center gap-x-4 text-xl ">
                <span className="font-normal">Giá:</span>
                <div className="flex relative text-d mr-2 ">
                  320.000
                  <span className="absolute top-0 -right-[10px]">₫</span>
                </div>
                {/* <div className="flex relative text-[#bbb] text-base line-through">
                500.000 <span className="absolute top-0 -right-2">₫</span>
              </div> */}
              </div>

              <div className="flex items-center border border-[#ccc] w-full max-w-[120px] text-base font-medium">
                <div className="px-4 py-2 cursor-pointer text-xl hover:opacity-80">
                  -
                </div>
                <span className="px-4 py-2 flex-1 text-center">1</span>
                <div className="px-4 py-2 cursor-pointer text-xl hover:opacity-80">
                  +
                </div>
              </div>

              <div className="flex items-center gap-x-4 justify-start text-w font-medium text-base">
                <button className="bg-d px-4 rounded-sm py-2 border-none outline-none hover:opacity-80">
                  Thêm Vào Giỏ
                </button>
                <button className="bg-d px-4 rounded-sm py-2 border-none outline-none hover:opacity-80">
                  Mua Hàng
                </button>
              </div>
              <div className="flex font-medium text-base flex-col">
                <ul className="flex gap-x-2">
                  <li className="px-2 py-2 border-b hover:opacity-80">
                    Giới Thiệu
                  </li>
                  <li className="px-2 py-2 border-b hover:opacity-80">
                    Chi Tiết Sản Phẩm
                  </li>
                  <li className="px-2 py-2 border-b hover:opacity-80">
                    Công Dụng
                  </li>
                </ul>

                <div className="flex text-sm font-normal mt-5">
                  <p className="text-justify ">
                    Theo Y học cổ truyền, “ Lục phủ ngũ tạng ” đều thu nhỏ trong
                    lòng bàn chân. Đó cũng là nơi bắt đầu của ba “ Kinh túc tam
                    âm ” – Tỳ, gan, thận và là nơi cuối cùng của “ Kinh túc tam
                    dương ” – Vị, mật, bàng quang. Bàn chân là gốc của cơ thể,
                    tham gia vào quá trình vận hành khí huyết. Giúp cơ thể tiếp
                    âm hàng ngày trong việc cân bằng cơ thể với trời đất. Giúp
                    nâng đỡ cơ thể vững vàng, di chuyển dễ dàng. Vì vậy có thể
                    chữa bách bệnh thông qua việc tác động vào các huyệt đạo bàn
                    chân Liên hệ với lục phủ ngũ tạng, nối liền các bộ phận quan
                    trọng, các tạng phủ trong cơ thể như tâm (tim) – can (gan) –
                    tỳ (lách) – phế (phổi) – thận đều có các huyệt tương ứng ở
                    bàn chân. Người lớn tuổi, Muối thảo mộc ngâm chân Cung Đình
                    sẽ giúp bạn cải thiện tình trạng này một cách hiệu quả, giúp
                    bạn trị dứt điểm những cơn đau nhức chân, trị mùi khó chịu,
                    giúp bạn có giấc ngủ ngon mỗi đêm.
                  </p>
                  <ul className="flex flex-col gap-y-2  list-disc px-4 hidden">
                    <li>100% nguyên liệu từ thiên nhiên, không có hóa chất.</li>
                    <li>Thân thiện với làn da.</li>
                    <li>
                      Hiệu quả rõ rệt ngay tuần đầu tiên dùng sản phẩm đều đặn.
                    </li>
                    <li>Cách sử dụng đơn giản.</li>
                  </ul>
                  <ul className="flex flex-col gap-y-2 list-disc px-4 hidden">
                    <li>
                      Kích thích tuần hoàn máu và giúp khí huyết điều hòa.
                    </li>
                    <li>
                      Giúp tạo tinh thần thoải mái, giúp ngủ ngon và hỗ trợ
                      chứng mất ngủ.
                    </li>
                    <li>Chống lạnh bàn chân vào mùa đông.</li>
                    <li>
                      Loại bỏ những mùi hôi khó chịu, giữ cho đôi chân luôn sạch
                      sẽ.
                    </li>
                    <li>Giảm phù nề bàn chân cho phụ nữ mang thai.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuyWith />
    </>
  );
};

export default ProductDetail;
