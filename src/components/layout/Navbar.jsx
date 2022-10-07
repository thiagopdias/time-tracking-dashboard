import { Link } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="list">
          <li>
              <Link to="/time-tracking-dashboard/">Daily</Link>
          </li>

          <li>
              <Link to="/time-tracking-dashboard/weekly">Weekly</Link>
          </li>

          <li>
              <Link to="/time-tracking-dashboard/monthly">Monthly</Link>
          </li>
      </ul>
    </nav>
  )
  }
  
  export default Navbar