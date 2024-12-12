import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </>
  );
}

export default Header;