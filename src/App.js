import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Blog = lazy(() => import("./pages/Blog"));
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const LayOut = lazy(() => import("./pages/layout/LayOut"));
const Intro = lazy(() => import("./pages/Intro"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/san-pham" element={<Product />} />
          <Route path="/san-pham/:slug" element={<ProductDetail />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/gioi-thieu" element={<Intro />} />
          <Route path="/bai-viet" element={<Blog />} />
          <Route path="/thanh-toan" element={<Cart />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
