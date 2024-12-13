import { Link } from "react-router";

const Header  = () => {
  return (
    <header>
      <div className='container'>
        <ul className='navigation'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;