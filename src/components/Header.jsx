import { NavLink } from "react-router-dom";
import { siteData } from "../data/siteData";

const linkClass = ({ isActive }) =>
  "nav-link text-uppercase" + (isActive ? " active fw-bold text-decoration-underline" : "");

export default function Header() {
  return (
    <header className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <NavLink className="navbar-brand text-uppercase" to="/">
          {siteData.brand}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto gap-lg-2">
            <li className="nav-item">
              <NavLink className={linkClass} to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/services">SERVICES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/contact">CONTACT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/mentions-legales">MENTIONS LÉGALES</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
