// import { supabase } from './utils/supabase'
import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/HeaderNavbar"
// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import ProductDetail from "./pages/ProductDetail"
// import Cart from "./pages/Cart"
// import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"

function App() {

  return (
    <main>
      <Navbar />
      {/* <Home /> */}
      <PageNotFound />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ProductDetail /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      <Footer />
    </main>
  )
}

export default App
