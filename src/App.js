import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PageNotFound, Cart, Product, Products, About, Contact, Ca } from "./pages"
import Navbar from "./components/navbar";
import Category from "./pages/categoryPage";
import ProductDetails from "./pages/productDetails";

function App() {
  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:category" element={<Category />} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
