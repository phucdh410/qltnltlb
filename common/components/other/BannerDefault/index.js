import React from "react";

const BannerDefault = () => {
  return (
    <div className="container-fluid px-0 banner-default">
      <div className="row" style={{ height: "100%", alignItems: "center" }}>
        <div className="col-11 mx-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-7">
                <img
                  src="/assets/images/global/left-text.webp"
                  alt="left-text"
                />
              </div>
              <div className="col-9 col-md-5 mx-auto">
                <img
                  src="/assets/images/global/right-text.webp"
                  alt="right-text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDefault;
