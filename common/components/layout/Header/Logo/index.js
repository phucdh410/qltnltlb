import React from "react";

const Logo = () => {
  return (
    <div className="row logo-container">
      <div className="col-3 col-md-2 col-lg-3">
        <img
          className="logo-item"
          src="/assets/images/global/logo-doan.webp"
          alt="logo-doan"
        />
      </div>
      <div className="col-5 col-md-4 col-lg-5">
        <img
          className="logo-item"
          src="/assets/images/global/logo-truong.webp"
          alt="logo-truong"
        />
      </div>

      <div className="col-3 col-md-2 col-lg-3">
        <img
          className="logo-item"
          src="/assets/images/global/logo-hoi.webp"
          alt="logo-hoi"
        />
      </div>
    </div>
  );
};

export default Logo;
