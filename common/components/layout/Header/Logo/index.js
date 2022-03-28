import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="row logo-container">
      <div className="col-3 col-md-2 col-lg-3">
        <Link href="/" passHref>
          <img
            className="logo-item"
            src="/assets/images/global/logo-doan.webp"
            alt="logo-doan"
          />
        </Link>
      </div>
      <div className="col-5 col-md-4 col-lg-5">
        <Link href="/" passHref>
          <img
            className="logo-item"
            src="/assets/images/global/logo-truong.webp"
            alt="logo-truong"
          />
        </Link>
      </div>

      <div className="col-3 col-md-2 col-lg-3">
        <Link href="/" passHref>
          <img
            className="logo-item"
            src="/assets/images/global/logo-hoi.webp"
            alt="logo-hoi"
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
