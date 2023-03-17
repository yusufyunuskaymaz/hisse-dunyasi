import React from "react";

const YasalUyari = () => {
  return (
    <div className="mb-5">
      <span style={{ color: "red" }}>Yasal Uyarı:</span>{" "}
      <p style={{ fontSize: ".9rem" }}>
        hissedunyasi.com'de yer alan bilgi, yorum ve tavsiyeler Yatırım
        Danışmanlığı kapsamında değildir. Yorumlar kullanıcıların kişisel
        görüşlerinden ibarettir. Bu görüş ve bilgilere dayanılarak alınacak
        yatırım kararları beklentilerinize uygun sonuçlar doğurmayabilir.
        Dolayısıyla kullanıcıların yorumlarına göre yatırım kararı almamanız
        konusunda kesinlikle uyarıyoruz.
      </p>
    </div>
  );
};

export default YasalUyari;
