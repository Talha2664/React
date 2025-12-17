// Import pages
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ProductsPage from './Pages/ProductsPage'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import PageNotFound from './Pages/PageNotFound'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// Import routing components
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className='app'>
  <Navbar />

  <main className='content'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contactus' element={<Contact />} />
      <Route path='/productspage' element={<ProductsPage />}>
        <Route path='Mens' element={<Mens />} />
        <Route path='Womens' element={<Womens />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </main>

  <Footer />
</div>

  )
}

export default App
