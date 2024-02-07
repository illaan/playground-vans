import { Outlet, NavLink } from "react-router-dom";
import { TranslationContext } from "../TranslationContext";
import { useContext } from "react";

function HostLayout() {
  const { translations, selectedLanguage, handleLanguageChange } =
    useContext(TranslationContext);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {translations.dashboard}
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {translations.income}
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {translations.vans}
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {translations.reviews}
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default HostLayout;
