import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

import '../../App.css'

function Navbar() {
  return (
    <nav className="navbar  mb-5  bg-dark  navbar-expand-lg align-items-center ">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="" width="320px" className=" navbar-brand" />
        </Link>

        <style jsx>
          {`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            button[aria-expanded="true"] > .open {
              display: none;
            }
          `}
        </style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-white"></span>
          <span className="fas fa-times close text-white"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5 me-5">
            <NavLink
              style={{ color: "white", fontSize: "25px" }}
              activeClassName="active"
              className="nav-link "
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{ color: "white", fontSize: "25px" }}
              activeclassname="active"
              className="nav-link "
              to="/episodes"
            >
              Episodes
            </NavLink>
            <NavLink
              style={{ color: "white", fontSize: "25px" }}
              activeclassname="active"
              className="nav-link "
              to="/location"
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
