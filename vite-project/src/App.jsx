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
import ListProduct from "./pages/Admin/ListProduct";
import Chat from "./pages/Chat";
import AdminRoute from "./route/AdminRoute";
import UserRoute from "./route/UserRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />

        {/* Rute privat untuk pengguna */}
        <Route element={<UserRoute />}>
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* Rute privat untuk admin */}
        <Route element={<AdminRoute />}>
          <Route path="/admin-product" element={<AdminProduct />} />
          <Route path="/list-product" element={<ListProduct />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
