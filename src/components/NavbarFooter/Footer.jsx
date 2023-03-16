import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <CardGroup text="light" mt-2>
      <Card>
        <Card.Body>
          <Card.Title>
            <strong>BORSA</strong>
          </Card.Title>
          <div class="col-xl-4 offset-xl-2 col-lg-4 col-md-6">
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
                    class="text-decoration-none"
                  >
                    THY
                  </Link>
                </li>
                <li>
                  <Link
                    to="stock/yapi-ve%20kredi%20bank."
                    class="text-decoration-none"
                  >
                    Yapı Kredi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            <strong>DÖVİZ</strong>
          </Card.Title>
          <div class="col-xl-4 offset-xl-2 col-lg-4 col-md-6">
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link to="currency" class="text-decoration-none">
                    Dolar
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Euro
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Sterlin
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Yen
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Ruble
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            <strong>ALTIN</strong>
          </Card.Title>
          <div class="col-xl-4 offset-xl-2 col-lg-4 col-md-6">
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Gram Altın
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Çeyrek Altın
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Yarım Altın
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Tam Altın
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Ata Altın
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            <strong>KRİPTO</strong>
          </Card.Title>
          <div class="col-xl-4 offset-xl-2 col-lg-4 col-md-6">
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Bitcoin
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Ethereum
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    Tether
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    BNB
                  </Link>
                </li>
                <li>
                  <Link to="stock" class="text-decoration-none">
                    USD Coin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Footer;
