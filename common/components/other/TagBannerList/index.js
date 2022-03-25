import React from "react";

const TagBannerList = ({ tagBanners }) => {
  return (
    <section className="tf-section porfolio">
      <div className="container">
        <div className="row mt-61 justify-content-center">
          {tagBanners.map((e, i) => (
            <div key={e.id} className="col-md-6 col-lg-5 col-xl-5 col-xxl-6">
              <div
                className="tag-banner"
                data-aos="fade-up"
                data-aos-offset="20"
                style={{ background: `url(${e.image})` }}
              >
                <div className="tag-label">{e.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TagBannerList;
