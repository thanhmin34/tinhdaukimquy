const products = [
  {
    id: 1,
    title: "Tinh Dầu Massage",
    price: 291500,
    pricesale: 265000,
    sale: 10,
    cart: "yêu thích",
    bought: true,
    image: "/img/image/massage.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-massage",
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ trong điều trị tê thấp, đau nhức xương khớp, khử mùi hôi chân. Hỗ trợ trong thê thao làm phục hồi thư giãn cơ, xương khớp khi vận động quá sức.Hỗ trợ trong xoa bóp thẩm mỹ làm thư giản vòng eo, bụng.",
  },
  {
    id: 2,
    title: "Tinh Dầu Hoa Sen",
    price: 150000,
    pricesale: 137000,
    sale: 10,
    bought: true,
    cart: "new",
    image: "/img/image/hoa-sen.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-hoa-sen",
    name: "hộp",
    description: "tinh dầu Hoa sen",
  },
  {
    id: 3,
    title: "Tinh Dầu Oải Hương",
    price: 129000,
    pricesale: 117000,
    sale: 10,
    cart: "new",
    image: "/img/image/oai-huong.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-oai-huong",
    name: "hộp",
    description: "tinh dầu Hoa sen",
  },
  {
    id: 4,
    title: "Tinh Dầu Bưởi",
    price: 150000,
    pricesale: 137000,
    sale: 10,
    cart: "new",
    image: "/img/image/tinh-dau-buoi.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-buoi",
    name: "hộp",
    description: "tinh dầu Hoa sen",
  },
  {
    id: 5,
    title: "Cao Dầu Tràm",
    price: 106800,
    pricesale: 89000,
    sale: 20,
    bought: true,
    cart: "yêu thích",
    image: "/img/image/cao-dau-tram.jpg",
    categorySlug: "cao-dau",
    slug: "cao-dau-tram",
    name: "hộp",
    description: "tinh dầu Hoa sen",
  },
  {
    id: 6,
    title: "Cà Gai Leo",
    price: 400000,
    pricesale: 385000,
    sale: 3.8,
    cart: "new",
    image: "/img/image/ca-gai-leo.jpg",
    categorySlug: "khac",
    bought: true,
    slug: "ca-gai-leo",
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ trong điều trị viêm gan, xơ gan. Giúp tăng cường chức năng gan, giải độc gan, giải rượu, làm hạ men gan.",
  },
  {
    id: 7,
    title: "Hà Thủ Ô",
    price: 368000,
    pricesale: 320000,
    sale: 15,
    cart: "new",
    image: "/img/image/ha-thu-o.jpg",
    bought: true,
    categorySlug: "khac",
    slug: "ha-thu-o",
    name: "hộp",
    description:
      "Công dụng: Giúp bồi bổ cơ thể, đẹp da, trị suy nhược cơ thể, đẹp da, trị suy nhược thần kinh, khỏe gân cốt, giảm cholesterol, chống xơ vỡ động mạch. Đặc biệt là bài thuốc quý trong điều trị rụng tóc và tóc bạc sớm.",
  },
  {
    id: 8,
    title: "Tinh Dầu Dừa",
    price: 100000,
    pricesale: 95000,
    sale: 5,
    cart: "new",
    image: "/img/image/tinh-dau-dua.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-dua",
    name: "hộp",
    description:
      "Công dụng: Giúp bồi bổ cơ thể, đẹp da, trị suy nhược cơ thể, đẹp da, trị suy nhược thần kinh, khỏe gân cốt, giảm cholesterol, chống xơ vỡ động mạch. Đặc biệt là bài thuốc quý trong điều trị rụng tóc và tóc bạc sớm.",
  },
  // {
  //   id: 9,
  //   title: "Tinh Dầu Dừa",
  //   price: 100000,
  //   pricesale: 95000,
  //   sale: 5,
  //   cart: "new",
  //   image: "/img/image/tinh-dau-dua.jpg",
  //   categorySlug: "Tinh Dầu",
  //   slug: "tinh-dau-dua",
  //   name: "hộp",
  //   description:
  //     "Công dụng: Giúp bồi bổ cơ thể, đẹp da, trị suy nhược cơ thể, đẹp da, trị suy nhược thần kinh, khỏe gân cốt, giảm cholesterol, chống xơ vỡ động mạch. Đặc biệt là bài thuốc quý trong điều trị rụng tóc và tóc bạc sớm.",
  // },
  {
    id: 10,
    title: "Tinh Dầu Mè Đen",
    price: 137000,
    pricesale: 130000,
    sale: 5,
    cart: "new",
    image: "/img/image/tinh-dau-me-den.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-me-den",
    name: "hộp",
    description:
      "Công dụng: Giúp nhuận tràng, giảm táo bón, tăng cường sức đề kháng, bổ sung chất sắt, tớ cho hệ tiêu hóa; tiêu hủy các loại giun sán thừa trong trường ruột, lọc máu. Bồi bổ sinh lực, khí huyết, chống viêm phế quản, chống nám, sạm da, làm mịn da và đẹp da. Tốt cho phụ nữ có thai, tuổi dậy thì, những người thiếu máu, phụ nữ sau sinh, phụ nữ bị rong kinh.",
  },
  {
    id: 11,
    title: "Tinh Dầu Treo Xe Hoa Hồng",
    price: 137000,
    pricesale: 130000,
    sale: 5,
    bought: true,
    cart: "yêu thích",
    image: "/img/image/tinh-dau-treo-xe-hoa-hong.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-hoa-hong",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 12,
    title: "Tinh Dầu Treo Xe Hoa Lài",
    price: 137000,
    pricesale: 130000,
    sale: 5,
    cart: "yêu thích",
    image: "/img/image/tinh-dau-treo-xe-hoa-lai.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-hoa-lai",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 13,
    title: "Tinh Dầu Treo Xe Ngọc Lan Tây",
    price: 116000,
    pricesale: 110000,
    sale: 4,
    cart: "new",
    image: "/img/image/tinh-dau-treo-xe-hoa-ngoc-lan-tay.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-hoa-ngoc-lan-tay",
    bought: true,
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 14,
    title: "Tinh Dầu Treo Xe Oải Hương",
    price: 116000,
    pricesale: 110000,
    sale: 5,
    cart: "new",
    image: "/img/image/tinh-dau-treo-xe-oai-huong.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-oai-huong",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 15,
    title: "Tinh Dầu Treo Xe Quế",
    price: 100000,
    pricesale: 95000,
    sale: 5,
    cart: "new",
    image: "/img/image/tinh-dau-treo-xe-que.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-que",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 16,
    title: "Tinh Dầu Treo Xe Sả Chanh",
    price: 79000,
    pricesale: 75000,
    sale: 2.5,
    cart: "new",
    image: "/img/image/tinh-dau-treo-xe-sa-chanh.jpg",
    categorySlug: "tinh-dau-treo",
    slug: "tinh-dau-treo-xe-sa-chanh",
    name: "hộp",
    description:
      "Công dụng: Khử mùi, thanh lọc không khí; kháng khuẩn, hương thơm dễ chịu, giúp tinh thần thư giãn, tỉnh táo, giảm mệt mỏi và giảm say xe. Đuỗi muỗi và côn trùng.",
  },
  {
    id: 17,
    title: "Tinh Dầu Ngãi Cứu",
    price: 137000,
    pricesale: 130000,
    sale: 4.8,
    cart: "new",
    image: "/img/image/ngai-cuu.jpeg",
    categorySlug: "tinh-dau",
    slug: "ngai-cuu",
    bought: true,
    name: "hộp",
    description:
      "Công dụng: Hỗ trợ điều trị đau các cơ bắp, các khớp xương, đau cột sống, đau thần kinh tọa, chống mệt mỏi toàn thân.Chú ý khi dùng: Không dùng cho trẻ em dưới 2 tuổi, không nên dùng vết thương hở, người bị kích ứng với các thành phần của sản phẩm.",
  },
  {
    id: 18,
    title: "Trị Đau Răng Gia Truyền",
    price: 100000,
    pricesale: 95000,
    sale: 5,
    cart: "new",
    image: "/img/image/tinh-dau-tri-dau-rang.jpg",
    categorySlug: "khac",
    slug: "tinh-dau-tri-dau-rang",
    name: "hộp",
    description:
      "Công dụng: Chặn đứng hoàn toàn sự lung lay của răng, làm hết viêm nhiễm các chân răng, hết sưng các nướu ở chân răng, diệt các vi khuẩn gây nguy hại đến tủy của chân răng, hết tê buốt, hết kiên chân răng, làm răng chắc khỏe mỗi ngày.",
  },
  {
    id: 19,
    title: "Trị Gút",
    price: 100000,
    pricesale: 95000,
    sale: 5,
    cart: "new",
    image: "/img/image/tri-gut.jpg",
    categorySlug: "khac",
    slug: "tri-gut",
    name: "hộp",
    description:
      "Công dụng: Giải tỏa các độc tố tích tụ, ứ đọng ở các khớp, thanh nhiệt trừ phong, thông kinh hoạt huyết, xua tan các cơn đau nhức ở các xương khớp, giúp lợi gân cốt, hạn chế các bệnh teo cơ, chống tê mỏi tay chân.",
  },
  {
    id: 20,
    title: "Trị Mụn Gia Truyền",
    price: 210000,
    pricesale: 200000,
    sale: 5,
    cart: "yêu thích",
    image: "/img/image/tri-mun.jpg",
    categorySlug: "khac",
    slug: "tri-mun",
    name: "hộp",
    description:
      "Công dụng: Kháng khuẩn cho toàn bộ làn da bị viêm nhiễm, không cho các vi khuẩn có cơ hội phát tán lây lan thêm, ngừa các tạp khuẩn từ môi trường xung quanh, kịp thời chấm dứt tình trạng biến chứng mụn. Loại bỏ và cân bằng chất nhờn trên da, tạo độ thông thoáng từ các lỗ chân lông không để cho mầm vi khuẩn hình thành bộc phát, cô lập và rút khô các nhân mụn rồi tự phân hủy. Bổ sung một lượng vitamin cần thiết giúp kích thích sản sinh một số tế bào mới để bổ sung cho sự hư hại của làn da do mụn, làm liền, làm mờ các vết sẹo do mụn để lại đồng thời ngăn ngừa sự tái phát của các loại mụn.",
  },
  // {
  //   id: 33,
  //   title: "Trị Nám Tàn Nhang Gia Truyền",
  //   price: 210000,
  //   pricesale: 200000,
  //   sale: 5,
  //   cart: "new",
  //   image: "/img/image/tri-nam.jpg",
  //   categorySlug: "khac",
  //   slug: "tri-nam",
  //   name: "hộp",
  //   description:
  //     "Công dụng: Giải tỏa các độc tố tích tụ, ứ đọng ở các khớp, thanh nhiệt trừ phong, thông kinh hoạt huyết, xua tan các cơn đau nhức ở các xương khớp, giúp lợi gân cốt, hạn chế các bệnh teo cơ, chống tê mỏi tay chân.",
  // },
  {
    id: 21,
    title: "Trị Nám Tàn Nhang Gia Truyền",
    price: 210000,
    pricesale: 200000,
    sale: 5,
    cart: "new",
    image: "/img/image/tri-nam.jpg",
    categorySlug: "khac",
    slug: "tri-nam",
    name: "hộp",
    description:
      "Công dụng: Kháng khuẩn cho toàn bộ làn da bị viêm nhiễm, không cho các vi khuẩn có cơ hội phát tán lây lan thêm, ngừa các tạp khuẩn từ môi trường xung quanh, kịp thời chấm dứt tình trạng biến chứng mụn. Loại bỏ và cân bằng chất nhờn trên da, tạo độ thông thoáng từ các lỗ chân lông không để cho mầm vi khuẩn hình thành bộc phát, cô lập và rút khô các nhân mụn rồi tự phân hủy. Bổ sung một lượng vitamin cần thiết giúp kích thích sản sinh một số tế bào mới để bổ sung cho sự hư hại của làn da do mụn, làm liền, làm mờ các vết sẹo do mụn để lại đồng thời ngăn ngừa sự tái phát của các loại mụn.",
  },
  {
    id: 22,
    title: "Trị Sâu Răng",
    price: 63000,
    pricesale: 60000,
    sale: 5,
    cart: "yêu thích",
    image: "/img/image/tri-sau-rang.jpg",
    categorySlug: "khac",
    slug: "tri-sau-rang",
    bought: true,
    name: "hộp",
    description:
      "Công dụng: Điều trị các loại sâu răng, viêm chân răng, chảy máu chân răng, ngứa, sưng và nhức chân răng.",
  },
  {
    id: 23,
    title: "Trị Viêm Xoang",
    price: 137000,
    pricesale: 13000,
    sale: 5,
    cart: "new",
    image: "/img/image/tri-viem-xoang.jpg",
    categorySlug: "khac",
    slug: "tri-viem-xoang",
    name: "hộp",
    description:
      "Công dụng: Chuyên đặc trị cấc loại viêm xoang cấp và mãn tính: viêm xoang, viêm mũi dị ứng, nghẹt mũi, ngứa mũi, đau nhức đầu vùng mặt do viêm xoang gây ra.",
  },
  {
    id: 24,
    title: "Vitamin Dưỡng Da",
    price: 204000,
    pricesale: 170000,
    sale: 20,
    cart: "yêu tích",
    image: "/img/image/vitamin-duong-da.jpg",
    categorySlug: "vitamin",
    slug: "vitamin-duong-da",
    name: "hộp",
    description:
      "Công dụng: Làm mát da, mịn da, bổ sung vitamin nuôi dưỡng và các dưỡng chất cần thiết nuôi dưỡng da. Làm hết hăm, rát các vùng kín ở người lớn và trẻ nhỏ. Đặc biệt ngăn ngừa rôm sảy, ngứa ở trẻ sơ sinh và trẻ nhỏ, giúp làm nhanh chóng lên da non, làm dịu các vết bỏng, làm liền sẹo, mịn màng, trắng da.",
  },
  {
    id: 25,
    title: "Vitamin Dưỡng thể",
    price: 3160000,
    pricesale: 300000,
    sale: 5,

    image: "/img/image/vitamin-duong-the.jpg",
    categorySlug: "vitamin",
    slug: "vitamin-duong-the",
    name: "hộp",
    description:
      "Công dụng: Làm mát da, mịn da, bổ sung vitamin nuôi dưỡng và các dưỡng chất cần thiết nuôi dưỡng da. Làm hết hăm, rát các vùng kín ở người lớn và trẻ nhỏ. Đặc biệt ngăn ngừa rôm sảy, ngứa ở trẻ sơ sinh và trẻ nhỏ, giúp làm nhanh chóng lên da non, làm dịu các vết bỏng, làm liền sẹo, mịn màng, trắng da.",
  },
  {
    id: 26,
    title: "Xịt Phòng Bưởi",
    price: 143000,
    pricesale: 130000,
    sale: 10,
    cart: "new",
    image: "/img/image/xit-phong-buoi.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-buoi",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 27,
    title: "Xịt Phòng Hoa Lài",
    price: 143000,
    pricesale: 130000,
    sale: 10,
    cart: "yêu thích",
    image: "/img/image/xit-phong-hoa-lai.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-hoa-lai",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 28,
    title: "Xịt Phòng Hoa Sen",
    price: 143000,
    pricesale: 130000,
    bought: true,
    sale: 10,
    cart: "yêu thích",
    image: "/img/image/xit-phong-hoa-sen.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-hoa-sen",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 29,
    title: "Xịt Phòng Oải Hương",
    price: 143000,
    pricesale: 130000,
    sale: 10,
    cart: "new",
    image: "/img/image/xit-phong-oai-huong.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-oai-huong",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 30,
    title: "Xịt Phòng Quế",
    price: 143000,
    pricesale: 130000,
    sale: 10,

    image: "/img/image/xit-phong-que.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-que",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 31,
    title: "Xịt Phòng Sả Chanh",
    price: 143000,
    pricesale: 130000,
    sale: 10,
    cart: "new",
    image: "/img/image/xit-phong-xa-chanh.jpg",
    categorySlug: "xit-phong",
    slug: "xit-phong-xa-chanh",
    name: "hộp",
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
  {
    id: 32,
    title: "Xịt Phòng Trầm",
    price: 143000,
    pricesale: 130000,
    sale: 10,

    image: "/img/image/xit-phong-tram.jpeg",
    categorySlug: "xit-phong",
    slug: "xit-phong-tram",
    name: "hộp",
    bought: true,
    description:
      "Công dụng: Làm thư giản, khử mùi ẩm mốc, sát khuẩn, hương thơm dễ chịu.",
  },
];

const getAllProducts = () => products;

const getProducts = (min, count) => {
  const max = products.length - count;

  return products.slice(min, count);
};
const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
const productData = {
  getAllProducts,
  getProducts,

  getProductBySlug,
};
export default productData;