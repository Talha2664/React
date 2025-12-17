import { Outlet,Link } from "react-router-dom"

const ProductsPage = () => {
  return (
    <div className="productsParent"> 
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