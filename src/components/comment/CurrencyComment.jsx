function CurrencyComment({ item }) {
  const list = [
    "zaro ağa",
    "kahin",
    "recep emmi",
    "alinin ismail",
    "çömlekci hasan",
  ];

  return (
    <div>
      <h1>{item.code} Yorumları</h1>
      <h4>
        Yasal Uyarı: https://hisse-dunyasi.netlify.app/'de yer alan bilgi, yorum
        ve tavsiyeler Yatırım Danışmanlığı kapsamında değildir. Yorumlar
        kullanıcıların kişisel görüşlerinden ibarettir. Bu görüş ve bilgilere
        dayanılarak alınacak yatırım kararları beklentilerinize uygun sonuçlar
        doğurmayabilir. Dolayısıyla kullanıcıların yorumlarına göre yatırım
        kararı almamanız konusunda kesinlikle uyarıyoruz.
      </h4>
      <div className="row">
        {list.map((item) => {
          return (
            <div className="col-12">
              <div
                className="card border border-3"
                style={{ marginBottom:"1rem",  padding: "1rem" }}
              >
                <div>
                <div><h3 style={{color:"green"}}>{item}</h3></div>
                  <img
                    width="50px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                    alt=""
                  />
                  <span>
                    Herkese günaydın. Asya- Pasifik piyasaları, yatırımcıların
                    bölgede bir dizi kilit ekonomik veriyi değerlendirmesiyle
                    çoğunlukla yükseldi. Çin Ulusal İstatistik Bürosu, imalat
                    sektörü endeksinin Nisan 2012'den bu yana en yüksek olan
                    Şubat ayında 52.6'ya yükseldiğini bildirdi. Hong Kong'un
                    Hang Seng Endeksi yüzde 3.04 arttı. Bölgede önde gelen
                    kazançlar ve Hang Seng Tech Endeksi yüzde 4.6 arttı. Çin
                    anakarasında, Shenzhen Bileşeni yüzde 0.89 düştü ve Şangay
                    Bileşik Endeksi de yüzde 0.69 düştü. Avustralya'da, 2022'nin
                    dördüncü çeyreği için GSYİH'nın yüzde 0.5'e ulaşmasıyla
                    S&P/ASX 200 yüzde 0.11 arttı. Japonya'da, Nikkei 225 düz
                    işlem görüyordu ve Topix, Şubat ayında fabrika faaliyeti iki
                    buçuk yıl içinde düşüş gösterdiği için yüzde 0.1 düştü.
                   
                  </span>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CurrencyComment;
