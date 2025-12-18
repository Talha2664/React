// Import pages (screens)
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ProductsPage from './Pages/ProductsPage'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import PageNotFound from './Pages/PageNotFound'
import Department from './Pages/Department'
import DepartmentDetail from './Pages/DepartmentDetail'
import Navbar2 from './Components/Navbar2'
// Import layout components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// Import routing components from react-router-dom
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    // Main app wrapper (full height layout)
    <div className='app'>

      {/* Navbar stays visible on all pages */}
      <Navbar />
      {/* Navbar2 stays visible on all pages */}
      <Navbar2 />

      {/* Main content area where pages change */}
      <main className='content'>

        {/* Routes decides which page to show based on URL */}
        <Routes>

          {/* Home page → "/" */}
          <Route path='/' element={<Home />} />

          {/* About page → "/about" */}
          <Route path='/about' element={<About />} />

          {/* Contact page → "/contactus" */}
          <Route path='/contactus' element={<Contact />} />

          {/* Products page with nested routes */}
          <Route path='/productspage' element={<ProductsPage />}>

            {/* Nested route → "/productspage/Mens" */}
            <Route path='Mens' element={<Mens />} />

            {/* Nested route → "/productspage/Womens" */}
            <Route path='Womens' element={<Womens />} />

          </Route>

          {/* Department main page → "/Department" */}
          <Route path='/Department' element={<Department />} />

          {/* Dynamic route → "/Department/mens", "/Department/womens", etc */}
          <Route path='/Department/:category' element={<DepartmentDetail />} />

          {/* 404 page for any unknown route */}
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </main>

      {/* Footer stays visible on all pages */}
      <Footer />

    </div>
  )
}

export default App
