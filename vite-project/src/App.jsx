import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/HeaderNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminProduct from "./pages/Admin/AdminProduct";
import Chat from "./pages/Chat";
import AdminRoute from "./route/AdminRoute";
import UserRoute from "./route/UserRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />

        {/* private untuk admin */}
        <Route element={<AdminRoute />}>
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="admin-product" element={<AdminProduct />} />
        </Route>
        {/* private untuk user */}
        <Route element={<UserRoute />}>
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
