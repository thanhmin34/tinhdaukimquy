import React from "react";

const Intro = () => {
  return (
    <div className="w-full max-w-[1280px] px-[10px] md:px-3 lg:px-5 xl:px-8 mx-auto mt-10 text-[#333]">
      <div className="relative pt-[39.25%] mb-10">
        <img
          src="/img/slide/slide1.png"
          alt=""
          className="absolute inset-0 object-cover w-full"
        />
      </div>
      <div className="flex flex-col font-bold text-center gap-y-1 text-sm md:text-base text-c">
        <h1 className="md:text-4xl xl:text-5xl text-2xl  py-4 border-b mx-auto">
          ABOUT US
        </h1>
        <span className="font-bold text-xl mt-4 lg:text-3xl ">
          Thương hiệu tinh dầu số 1 Việt Nam
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-10 max-w-[1000px] mx-auto my-10 text-c text-xl font-bold">
        <Banner
          img="/img/kimquy.jpg"
          title="Chiết suất"
          desc="Tinh Dầu Thiên Nhiên"
        />
        <Banner
          img="/img/kimquy.jpg"
          title="Tinh Dầu"
          desc="Hoàn Toàn Tự Nhiên"
        />
        <Banner
          img="/img/kimquy.jpg"
          title="Chất Lượng"
          desc="Chất Lượng Quốc Tế"
        />
      </div>

      <div className="py-10 bg-[#173c46] text-[15px] text-w">
        <h2 className="text-[30px] text-center py-5">Giá Trị Cốt Lõi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </div>
      </div>
      <div className="mt-10 grid-cols-1 md:grid-cols-2 grid gap-x-8 gap-y-8">
        <div className="relative  p-10">
          <img
            src="/img/kimquy.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-sm  font-medium ">
          <h2 className="text-xl lg:text-2xl  font-bold text-center mb-2 text-c lg:mb-5 lg:mt-10">
            CHẤT LƯỢNG HÀNG ĐẦU
          </h2>
          <p className="text-justify text-base md:text-base leading-7 md:leaidng-6 border border-[#d3d4d8] p-3">
            Kim Vui đặt yếu tố CHẤT LƯỢNG là HÀNG ĐẦU, với tiêu chí : “Mình
            dùng, khách hàng dùng, bán sản phẩm để mua lại Lòng Tin của khách
            hàng”. Từ xa xưa, Tinh dầu được ví như là nhựa sống của cây, vì vậy
            đã mang sức sống, năng lượng và mạnh hơn 100 lần các loại thảo dược
            sấy khô. <br /> Tuy nhiên, giữa thị trường tinh dầu như hiện nay thì
            để tìm ra được tinh dầu đảm bảo chất lượng không phải là điều dễ
            dàng. Hiểu được điều đó, Công ty TNHH MTV Sản xuất Tinh dầu Kim Vui
            đã duy trì và phát huy nghề truyền thống sản xuất tinh dầu của cha
            ông để lại với phương châm “Sức khỏe là Vàng”. Bên cạnh muốn lưu giữ
            nghề truyền thống và hướng đến sản phẩm chăm sóc sức khỏe đến tay
            người tiêu dùng và cộng đồng.
          </p>
        </div>
      </div>
      <div className="flex flex-col text-sm  font-medium my-10">
        <div className="flex ">
          <div className="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex flex-col  md:max-w-[500px] lg:max-w-[600px]">
              <h2 className="text-xl md:text-base lg:text-2xl font-bold text-center mb-2 lg:mb-5 ">
                LÝ DO NÊN LỰA CHỌN TINH DẦU “KIM VUI”
              </h2>
              <p className="text-justify text-base  leading-7 md:leaidng-6 p-3 border border-[#d3d4d8] mb-2 ">
                Trong thời đại công nghiệp hóa hiện nay, con người đang phải
                chịu quá nhiều dư lượng hóa chất, thậm chí từ thực phẩm mà họ
                đang ăn uống hàng ngày.
                <br /> Bản chât của Tinh dầu là sẽ đi qua đường hô hấp, qua da
                và ngấm vào máu, nó ảnh hưởng đến sức khỏe của bạn và gia đình,
                nên sự chọn lựa của bạn, sự quyết định của bạn là vô cùng quan
                trọng. Tinh dầu Kim Vui sẽ giúp bạn điều đó!
                <br />
                Dựa trên cơ sơ phương pháp chưng cất truyền thống, tinh dầu Kim
                Vui đã tiếp cận được phương pháp chưng cất hiện đại, đầu tư cơ
                sơ vật chất, máy móc hiện đại, nâng cao chất lượng nguồn nhân
                lực, có quy trình chọn lọc nghiêm ngặt nguyên liệu để cho ra đời
                sản phẩm chất lượng uy tín nhất. Từ đó Tinh dầu Kim Vui được
                nhiều khách hàng biết đến và là lựa chọn ưu tiên của khách hàng.
              </p>
            </div>
            <div className="p-5 md:p-3 md:gap-y-5 md:flex md:flex-col md:mt-5 xl:-translate-y-24">
              <img src="/img/luachon.jpg" alt="" />
              <img
                src="/img/luachon.jpg"
                alt=""
                className="md:flex hidden lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-sm  font-medium my-10">
        <h2 className="text-xl  font-bold text-center mb-2 md:mb-5 xl:mb-10 lg:text-2xl  ">
          CHẤT LƯỢNG SẢN PHẨM
        </h2>
        <div className="flex flex-col md:flex-row-reverse md:gap-x-5">
          <div className="flex flex-col w-full md:max-w-[400px] lg:max-w-[680px] md:mt-[10px]">
            <p className="text-justify text-base md:text-base leading-7 md:leaidng-6 p-3 border border-[#d3d4d8] mb-2   ">
              Đã từ lâu tinh dầu không chỉ dừng lại chỉ là một loại chất làm
              thơm, mà nó còn có rất nhiều những công dụng khác vô cùng tốt cho
              sức khỏe con người. Công ty sản xuất tinh dầu Kim Vui CAM KẾT về
              chất lượng của tất cả các sản phẩm mà Kim Vui đang cung cấp cho
              quý khách hàng. Kim Vui đặt yếu tố CHẤT LƯỢNG là HÀNG ĐẦU, với
              tiêu chí : “Mình dùng, khách hàng dùng, bán sản phẩm để mua lại
              Lòng Tin của khách hàng”.
              <br />
              Kim Vui cung cấp đến khách hàng nhiều loại tinh dầu khác nhau, vì
              vậy đáp ứng được sự lựa chọn tối đa của khách hàng. Tinh dầu Kim
              Vui có các loại tinh dầu như tinh dầu Tràm, tinh dầu Massage, tinh
              dầu Bạc Hà, tinh dầu Quế, tinh dầu Dừa, tinh dầu Trầm Hương, tinh
              dầu Sả.
            </p>
            <span className="text-d my-4 lg:block hidden text-center">
              Sản phẩm tinh dầu tràm Huế nguyên chất của công ty đã được cấp
              chứng nhận đạt chuẩn ISO 9001-2015.
            </span>
            <div className=" hidden lg:flex">
              <img src="img/luachon.jpg" alt="" />
            </div>
          </div>

          <div className="flex flex-col ">
            <img src="/img/iso.jpg" alt="" className="p-5 md:p-3 " />
          </div>
        </div>
      </div>

      <div className="flex flex-col my-10 gap-y-5 md:flex-row md:gap-x-5 md:my-16">
        <ul className="mt-10 text-base  font-medium flex flex-col gap-y-2 p-3 border border-[#ccc] md:mt-0 md:w-full md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
          <h2 className="text-xl font-bold lg:text-center md:mb-5">
            Mọi thông tin xin liên hệ
          </h2>
          <li>
            <strong className="mr-[px]">Địa chỉ:</strong> 01 Nguyễn Hữu Ba –
            Phường An Cựu – Thành phố Huế – Việt Nam.
          </li>
          <li>
            <strong className="mr-[2px]"> Điện thoại:</strong> 0234. 3814 672 –
            0934 898 552 – 077 9422 063 – 079 6613 941
          </li>
          <li>
            <strong className="mr-[4px]"> Facebook:</strong>
            <a href="www.facebook.com/kimvuivietnam/">
              www.facebook.com/kimvuivietnam
            </a>
          </li>
          <li>
            <strong className="mr-[4px]"> Youtube:</strong>
            <a href="www.facebook.com/kimvuivietnam/">
              www.youtube.com/kimvuivietnam
            </a>
          </li>
        </ul>
        <div className="flex ">
          <img src="/img/tapthe.jpg" alt="" className="border border-[#bbb] " />
        </div>
      </div>
    </div>
  );
};

export default Intro;

function Banner({ img, title, desc }) {
  return (
    <div className="flex flex-col">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col text-center py-5 ">
        <h2>{title}</h2>
        <p className="text-base font-normal">{desc}</p>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="flex flex-col text-center my-5">
      <div className="flex flex-col py-4 mx-8 bg-c text-base">
        <h3>TÔN CHỈ</h3>
        <span>"KHÁCH HÀNG LÀ TRUNG TÂM"</span>
      </div>
      <div className="text-justify mx-6 py-2 border-b mt-5">
        Với Tinh Dầu Thái Hà, Khách hàng luôn là người đặc biệt, hấp dẫn nhất.
      </div>
    </div>
  );
}
