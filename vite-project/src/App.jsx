// import { supabase } from './utils/supabase'
// import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/HeaderNavbar"
// import Home from "./pages/Home"
import Login from "./pages/Login"
// import Register from "./pages/Register"
import Footer from "./components/Footer"

function App() {

  return (
    <main>
      <Navbar />
      {/* <Home /> */}
      {/* <PageNotFound /> */}
      <Login />
      {/* <Register /> */}
      <Footer />
    </main>
  )
}

export default App
