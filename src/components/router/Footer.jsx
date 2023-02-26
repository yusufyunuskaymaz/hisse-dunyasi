import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0">
          <footer className="bg-dark text-white text-center fs-6">
            <p className="py-3 mb-0">
              Tüm hakları saklıdır. Made by Happy Coders{" "}
              {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
