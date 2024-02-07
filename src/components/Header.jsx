import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import avatar from "/src/assets/images/user-avatar.png";
import { TranslationContext } from "../TranslationContext";

function Header() {
  const { translations, selectedLanguage, handleLanguageChange } =
    useContext(TranslationContext);

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
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="en">English</option>
          <option value="bs">Bosnian</option>
        </select>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {translations.host}
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {translations.about}
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {translations.vans}
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatar} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
