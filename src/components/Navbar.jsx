import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid px-0" style={{ marginBottom: "8rem" }}>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{ backgroundColor: "#343a40" }}
        >
          <div className="container py-2">
            <NavLink className="navbar-brand text fs-3" to="/">
              Hisse Dünyası
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="#"> */}
                  <NavLink to="/stock" className="nav-link active">
                    Borsa
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/currency" className="nav-link active">
                    Döviz
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/gold" className="nav-link active">
                    Altın
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/crypto" className="nav-link active">
                    Kripto
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Giriş Yap
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/register"
                  >
                    Kayıt Ol
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
