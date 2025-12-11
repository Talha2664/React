import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h3>Talha Coder</h3>

      <div className='NavChild'>

        {/* Link — React Router ka special anchor tag 
            Page change hota hai but reload nahi hota */}
        <Link to='/'>Home</Link>

        {/* About page open karega without refresh */}
        <Link to='/aboutpage'>About</Link>

        {/* Contact page open karega without refresh */}
        <Link to='/contactus'>Contact</Link>

      </div>
    </div>
  )
}

export default Navbar
