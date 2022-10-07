import { Link } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="list">
          <li>
              <Link to="/">Daily</Link>
          </li>

          <li>
              <Link to="/weekly">Weekly</Link>
          </li>

          <li>
              <Link to="/monthly">Monthly</Link>
          </li>
      </ul>
    </nav>
  )
  }
  
  export default Navbar