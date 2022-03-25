import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SubmenuBtn from "./SubmenuBtn";

const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-10 col-md-10 col-lg-3 col-xl-3 col-xxl-3">
            <Logo />
          </div>
          <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 main-nav">
            <Navigation />
          </div>
          <div
            className="col-2 col-sm-2 col-md-2 sub-nav float-right"
            style={{ paddingTop: "16px" }}
          >
            <SubmenuBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
