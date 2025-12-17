import { Outlet,Link } from "react-router-dom"

const ProductsPage = () => {
  return (
    <div>
        <h1>ProductsPage</h1>
        <div className="ProductsLink">
          <Link to='/productspage/Mens'>Mens</Link>
          <Link to='/productspage/Womens'>Womens</Link>
        </div>
        {/* Mens / Womens component will render here */}
        <Outlet />

    </div>
  )
}

export default ProductsPage