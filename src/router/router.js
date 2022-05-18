import Home from "./pages/Home";
import LayOut from "./pages/layout/LayOut";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

const routespage = [
  {
    id: 1,
    display: <Home />,
    slug: "/",
  },
  {
    id: 2,
    display: <LayOut />,
    // slug: "/",
  },
  {
    id: 3,
    display: <Product />,
    slug: "/product",
  },
  {
    id: 4,
    display: <ProductDetail />,
    slug: "/product/:slug",
  },
];
export default routespage;
