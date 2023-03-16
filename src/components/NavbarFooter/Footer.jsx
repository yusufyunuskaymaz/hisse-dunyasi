import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <div className="mt-4" style={{ fontSize: ".5rem" }}>
      <div
        className="container-fluid p-3 ps-5 pt-5 footer "
        style={{ backgroundColor: "#242441" }}
      >
        <div className="row justify-content-center">
          <div className=" col-lg-2">
            <h5>BORSA</h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <a href="stock/akbank" className="text-decoration-none">
                    Akbank
                  </a>
                </li>
                <li>
                  <Link
                    to="stock/kardemir-(d)"
                    className="text-decoration-none"
                  >
                    Kardemir
                  </Link>
                </li>
                <li>
                  <Link to="stock/sise-cam" className="text-decoration-none">
                    Şişecam
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/turk-hava%20yollari"
                    className="text-decoration-none"
                  >
                    THY
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    className="text-decoration-none"
                  >
                    Yapı Kredi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-2">
            <h5>BORSA</h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Nav.Link
                    href="stock/akbank"
                    className="text-decoration-none"
                  >
                    Akbank
                  </Nav.Link>
                </li>
                <li>
                  <Link
                    to="stock/kardemir-(d)"
                    className="text-decoration-none"
                  >
                    Kardemir
                  </Link>
                </li>
                <li>
                  <Link to="stock/sise-cam" className="text-decoration-none">
                    Şişecam
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/turk-hava%20yollari"
                    className="text-decoration-none"
                  >
                    THY
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    className="text-decoration-none"
                  >
                    Yapı Kredi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-2 ">
            <h5>BORSA</h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Nav.Link
                    href="stock/akbank"
                    className="text-decoration-none"
                  >
                    Akbank
                  </Nav.Link>
                </li>
                <li>
                  <Link
                    to="stock/kardemir-(d)"
                    className="text-decoration-none"
                  >
                    Kardemir
                  </Link>
                </li>
                <li>
                  <Link to="stock/sise-cam" className="text-decoration-none">
                    Şişecam
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/turk-hava%20yollari"
                    className="text-decoration-none"
                  >
                    THY
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    className="text-decoration-none"
                  >
                    Yapı Kredi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-2 ">
            <h5>BORSA</h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Nav.Link
                    href="stock/akbank"
                    className="text-decoration-none"
                  >
                    Akbank
                  </Nav.Link>
                </li>
                <li>
                  <Link
                    to="stock/kardemir-(d)"
                    className="text-decoration-none"
                  >
                    Kardemir
                  </Link>
                </li>
                <li>
                  <Link to="stock/sise-cam" className="text-decoration-none">
                    Şişecam
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/turk-hava%20yollari"
                    className="text-decoration-none"
                  >
                    THY
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    className="text-decoration-none"
                  >
                    Yapı Kredi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-4 ">
            <h5>BORSA</h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Nav.Link
                    href="stock/akbank"
                    className="text-decoration-none"
                  >
                    Akbank
                  </Nav.Link>
                </li>
                <li>
                  <Link
                    to="stock/kardemir-(d)"
                    className="text-decoration-none"
                  >
                    Kardemir
                  </Link>
                </li>
                <li>
                  <Link to="stock/sise-cam" className="text-decoration-none">
                    Şişecam
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/turk-hava%20yollari"
                    className="text-decoration-none"
                  >
                    THY
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    className="text-decoration-none"
                  >
                    Yapı Kredi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Card.Footer className="text-center text-lg-left">
        <div
          className="text-center fs-6 p-3"
          style={{ backgroundColor: "rgba(43, 41, 41, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" href="https://hissedunyasi.com/">
            hissedunyasi.com
          </a>
        </div>
      </Card.Footer>
    </div>
  );
}

export default Footer;
