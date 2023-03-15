import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>
        {" "}
        <strong>HİSSE DÜNYASI</strong>{" "}
      </Card.Header>
      <Card.Body>
        <Card.Title>YASAL UYARI</Card.Title>
        <Card.Text>
          hissedunyasi.com'da yer alan bilgi, yorum ve tavsiyeler Yatırım
          Danışmanlığı kapsamında değildir. Yorumlar kullanıcıların kişisel
          görüşlerinden ibarettir. Bu görüş ve bilgilere dayanılarak alınacak
          yatırım kararları beklentilerinize uygun sonuçlar doğurmayabilir.
          Dolayısıyla kullanıcıların yorumlarına göre yatırım kararı almamanız
          konusunda kesinlikle uyarıyoruz.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        © Copyright 2023 | Me Happy Coders ®
      </Card.Footer>
    </Card>
  );
}

export default Footer;
