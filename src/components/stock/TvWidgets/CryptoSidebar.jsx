import React from "react";
import HomeCryptoWidget from "../../home/HomeCryptoWidget";

const CryptoSidebar = () => {
  return (
    <div className="row stickSidebar d-none d-lg-block">
      <div className="col">
        <div className="">
          <HomeCryptoWidget />
          <div className="stockDetail mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default CryptoSidebar;
