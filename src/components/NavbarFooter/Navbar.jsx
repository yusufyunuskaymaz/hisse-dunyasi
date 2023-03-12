import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../../auth/firebase";
import { AuthContext } from "../../context/AuthContextProvider";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  // console.log(currentUser)
  return (
    <>
      <div className="container-fluid px-0" style={{ marginBottom: "8rem" }}>
        <nav
          className="navbar navbar-expand-lg fixed-top shadow-sm"
          style={{ backgroundColor: "white" }}
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
                  <Link to="/stock" className="nav-link">
                    Borsa
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink to="/currency" className="nav-link ">
                    Döviz
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/gold" className="nav-link ">
                    Altın
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/crypto" className="nav-link ">
                    Kripto
                  </NavLink>
                </li>
              </ul>
              <div
                className="d-flex login-dropdown"
                onClick={handleDropdownToggle}
              >
                <div className="me-2">
                  <BsPerson size={27} />
                </div>
                <NavDropdown
                  title={currentUser ? currentUser.displayName : "Giriş Yap"}
                  id="basic-nav-dropdown"
                  show={showDropdown}
                >
                  {currentUser ? (
                    <NavDropdown.Item href="/login" onClick={() => logOut()}>
                      Çıkış Yap
                    </NavDropdown.Item>
                  ) : (
                    <>
                      <NavDropdown.Item href="/login">
                        Giriş Yap
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/register">
                        Kayıt Ol
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
