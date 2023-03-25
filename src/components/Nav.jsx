import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/pets">
                Pets
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/pets/add"
              >
                Add pet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
