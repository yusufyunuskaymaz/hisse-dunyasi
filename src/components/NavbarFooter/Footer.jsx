import React from "react";
import { NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Footer() {
  return (
    <CardGroup>
      <Card bg="secondary" text="white">
        <Card.Body>
          <Card.Title>
            <strong> HİSSE DÜNYASI </strong>
          </Card.Title>
          <Card.Text>
            Güncel Borsa, Altın, Döviz ve Kripto Para Endeksleri.
          </Card.Text>
          <div className="footermenu">
            <NavLink href="stock" className="navbar-white">
              Borsa
            </NavLink>
            <NavLink href="/currency">Döviz</NavLink>
          </div>
          <div className="footermenu">
            <NavLink href="/gold">Altın</NavLink>
            <NavLink href="/crypto">Kripto</NavLink>
          </div>
        </Card.Body>
      </Card>
      <Card bg="secondary" text="white">
        <Card.Body>
          <Card.Title>
            <strong> YASAL UYARI </strong>{" "}
          </Card.Title>
          <Card.Text>
            <strong>hissedunyasi.com</strong> da yer alan bilgi, yorum ve
            tavsiyeler Yatırım Danışmanlığı kapsamında değildir. Yorumlar
            kullanıcıların kişisel görüşlerinden ibarettir. Bu görüş ve
            bilgilere dayanılarak alınacak yatırım kararları beklentilerinize
            uygun sonuçlar doğurmayabilir. Dolayısıyla kullanıcıların
            yorumlarına göre yatırım kararı almamanız konusunda kesinlikle
            uyarıyoruz.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Footer;
