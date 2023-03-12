

// 

import StockTable from "../home/HomeStockTable";
import SideBarWidget from "../home/SideBarWidget";

const StickySidebar = () => {

  return (
    <div className="row stickSidebar d-none d-lg-block ">
      <div className="col">
         <SideBarWidget />
      </div>
      <div className="col">
         <StockTable />
      </div>
    </div>
  );
};

export default StickySidebar;
