const products = [
  {
    title: "Tinh Dầu Massage",
    price: "189000",
    pricesale: "179000",
    image: "/img/image/massage.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-massage",
    name: "hộp",
    description: "tinh dầu massage",
  },
  {
    title: "Tinh Dầu Hoa Sen",
    price: "120000",
    pricesale: "179000",

    image: "/img/image/hoa-sen.jpg",
    categorySlug: "tinh-dau",
    slug: "tinh-dau-hoa-sen",
    name: "hộp",
    description: "tinh dầu Hoa sen",
  },
  {
    title: "Cao Dầu Tràm",
    price: "100000",
    pricesale: "179000",

    image: "/img/image/cao-dau-tram.jpg",
    categorySlug: "cao-dau",
    slug: "cao-dau-tram",
    name: "hộp",
    description: "cao dầu tràm",
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  return products.slice(min, count);
};
const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
};
export default productData;
