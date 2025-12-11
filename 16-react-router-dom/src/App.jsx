import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      {/* Navbar har page par show hoga */}
      <Navbar />

      {/* Routes container — iske andar saare pages define hote hain */}
      <Routes>

        {/* Home page route — URL: / */}
        <Route 
          path='/' 
          element={<Home />} 
        />

        {/* About page route — URL: /aboutpage */}
        <Route 
          path='/aboutpage' 
          element={<About />} 
        />

        {/* Contact page route — URL: /contactus */}
        <Route 
          path='/contactus' 
          element={<Contact />} 
        />

      </Routes>
    </div>
  )
}

export default App
