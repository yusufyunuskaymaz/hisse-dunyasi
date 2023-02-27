import React from "react";

const BottomNavbar = () => {
  return (
    <>
      <div className="container mb-3">
        <div className="row">
          <div className="col">
            <ul
              className="d-flex justify-content-between text-white py-2 gap-3"
              style={{ backgroundColor: "#464C52" }}
            >
              <li>
                <i className="fa-solid fa-play"></i>
                <span className="fw-bolder">Bist</span> 5.026,83 %0,36
              </li>
              <li>
                <i className="fa-solid fa-play"></i>
                <span className="fw-bolder">Dolar</span> 18,8621 %0,08
              </li>
              <li>
                <i className="fa-solid fa-play"></i>
                <span className="fw-bolder">Altın</span> 1.117,0600 %0,36
              </li>
              <li className="me-3">
                <i className="fa-solid fa-play"></i>
                <span className="fw-bolder">Bitcoin</span> 18,8621 %0,08
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
