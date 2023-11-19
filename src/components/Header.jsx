import { Link, NavLink } from "react-router-dom";
import avatar from "/src/assets/images/user-avatar.png";

function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>

      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatar} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
