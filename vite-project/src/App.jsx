// import { supabase } from './utils/supabase'
// import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/HeaderNavbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <main>
      <Navbar />
      <Home />
      {/* <PageNotFound /> */}
      <Footer />
    </main>
  )
}

export default App
