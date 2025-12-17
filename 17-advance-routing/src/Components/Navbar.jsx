import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='NavParent'>
        <h1>Navbar</h1>
        <div className='NavChild'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contactus'>Contact</Link>
          <Link to='/productspage'>Products</Link>
          <Link to='/Department'>Departments</Link>
        </div>
    </div>
    
  )
}

export default Navbar