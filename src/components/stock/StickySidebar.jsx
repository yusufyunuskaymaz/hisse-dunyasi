

// 

import StockTable from "../home/HomeStockTable";

const StickySidebar = () => {

  return (
    <div className="row stickSidebar d-none d-lg-block ">
      <div className="col">
         <StockTable />
      </div>
    </div>
  );
};

export default StickySidebar;
