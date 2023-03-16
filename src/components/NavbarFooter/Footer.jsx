import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="mt-4" style={{ fontSize: ".5rem" }}>
      <div
        className="container-fluid p-3 ps-5 pt-5 footer "
        style={{ backgroundColor: "#242441" }}
      >
        <div className="row justify-content-center">
          <div className=" col-lg-2">
            <h5 type="button" onClick={() => navigate("/stock")}>
              BORSA
            </h5>
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
            <h5 type="button" onClick={() => navigate("/currency")}>
              DÖVİZ
            </h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Nav.Link
                    href="stock/akbank"
                    className="text-decoration-none"
                  >
                    Dolar
                  </Nav.Link>
                </li>
                <li>
                  <Link
                    to="stock/kardemir-(d)"
                    className="text-decoration-none"
                  >
                    Euro
                  </Link>
                </li>
                <li>
                  <Link to="stock/sise-cam" className="text-decoration-none">
                    Sterlin
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/turk-hava%20yollari"
                    className="text-decoration-none"
                  >
                    Kanada Doları
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    className="text-decoration-none"
                  >
                    Ruble
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-2 ">
            <h5 type="button" onClick={() => navigate("/gold")}>
              ALTIN
            </h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Nav.Link
                    href="stock/akbank"
                    className="text-decoration-none"
                  >
                    Gram Altın
                  </Nav.Link>
                </li>
                <li>
                  <Link
                    to="stock/kardemir-(d)"
                    className="text-decoration-none"
                  >
                    Çeyrek Altın
                  </Link>
                </li>
                <li>
                  <Link to="stock/sise-cam" className="text-decoration-none">
                    Tam Altın
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/turk-hava%20yollari"
                    className="text-decoration-none"
                  >
                    Ata Altın
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    className="text-decoration-none"
                  >
                    ONS Altın
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-2 ">
            <h5 type="button" onClick={() => navigate("/crypto")}>
              KRİPTO
            </h5>
            <div>
              <ul className="list-unstyled">
                <li>
                  <Nav.Link
                    href="stock/akbank"
                    className="text-decoration-none"
                  >
                    Bitcoin
                  </Nav.Link>
                </li>
                <li>
                  <Link
                    to="stock/kardemir-(d)"
                    className="text-decoration-none"
                  >
                    Ethereum
                  </Link>
                </li>
                <li>
                  <Link to="stock/sise-cam" className="text-decoration-none">
                    Tether
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/turk-hava%20yollari"
                    className="text-decoration-none"
                  >
                    BNB
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    className="text-decoration-none"
                  >
                    USD Coin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-4 ">
            <h5>YASAL UYARI</h5>
            <div>
              <p style={{ fontSize: ".9rem", color: "white" }}>
                hissedunyasi.com'da yer alan bilgi, yorum ve tavsiyeler Yatırım
                Danışmanlığı kapsamında değildir. Yorumlar kullanıcıların
                kişisel görüşlerinden ibarettir. Bu görüş ve bilgilere
                dayanılarak alınacak yatırım kararları beklentilerinize uygun
                sonuçlar doğurmayabilir. Dolayısıyla kullanıcıların yorumlarına
                göre yatırım kararı almamanız konusunda kesinlikle uyarıyoruz.
              </p>
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
