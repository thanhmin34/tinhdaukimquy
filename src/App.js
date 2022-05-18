import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import LayOut from "./pages/layout/LayOut";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gioithieu" element={<Intro />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
