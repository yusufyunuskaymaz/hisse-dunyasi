import React from "react";
import HomeCurrencyWidget from "../../home/HomeCurrencyWidget";

const CurrencySidebar = () => {
  return (
    <div className="row stickSidebar d-none d-lg-block">
      <div className="col">
        <div className="">
          <HomeCurrencyWidget />
          <div className="stockDetail mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default CurrencySidebar;
