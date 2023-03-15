import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card>
      <div class="container">
        <div class="row">
          <div class="col-xl-2 col-lg-2 col-md-6">
            <div>
              <h3>
                <strong> Hisse Dünyası </strong>
              </h3>
              <p class="mb-30 footer-desc">
                Güncel Borsa, Altın, Döviz ve Kripto Para Endeksleri
              </p>
            </div>
          </div>
          <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
            <div class="">
              <h4>Keşfet</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-decoration-none">
                    Anasayfa
                  </a>
                </li>
                <li>
                  <a href="stock" class="text-decoration-none">
                    Borsa
                  </a>
                </li>
                <li>
                  <a href="currency" class="text-decoration-none">
                    Döviz
                  </a>
                </li>
                <li>
                  <a href="gold" class="text-decoration-none">
                    Altın
                  </a>
                </li>
                <li>
                  <a href="crypto" class="text-decoration-none">
                    Kripto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-6">
            <div>
              <h4>Service</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-decoration-none">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoration-none">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoration-none">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoration-none">
                    Graphics Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 col-md-6">
            <div>
              <h4>YASAL UYARI</h4>
              <div>
                <p>
                  hissedunyasi.com'da yer alan bilgi, yorum ve tavsiyeler
                  Yatırım Danışmanlığı kapsamında değildir. Yorumlar
                  kullanıcıların kişisel görüşlerinden ibarettir. Bu görüş ve
                  bilgilere dayanılarak alınacak yatırım kararları
                  beklentilerinize uygun sonuçlar doğurmayabilir. Dolayısıyla
                  kullanıcıların yorumlarına göre yatırım kararı almamanız
                  konusunda kesinlikle uyarıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Card.Footer className="text-muted text-center">
          © 2023 HİSSE DÜNYASI - Her hakkı saklıdır.
        </Card.Footer>
      </div>
    </Card>
  );
}

export default Footer;
