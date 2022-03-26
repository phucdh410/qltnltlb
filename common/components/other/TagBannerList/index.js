import React from "react";
import Image from "next/image";
import Banner from "../Banner";

const tagBanners = [
  {
    id: 1,
    title: "Cuộc đời và hoạt động của Bác",
    image: "https://picsum.photos/828/436",
    size: 6,
  },
  {
    id: 2,
    title: "Hình ảnh tư liệu về Bác",
    image: "https://picsum.photos/828/436",
    size: 6,
  },
  {
    id: 3,
    title: "Những mẫu chuyện về Bác",
    image: "https://picsum.photos/828/436",
    size: 6,
  },
  {
    id: 4,
    title: "Phim tư liệu về Bác",
    image: "https://picsum.photos/828/436",
    size: 6,
  },
  {
    id: 5,
    title: "Địa danh lịch sử",
    image: "https://picsum.photos/828/436",
    size: 12,
  },
];
const TagBannerList = ({ tagBanners }) => {
  const smallBanner = tagBanners.filter((e, i) => e.size !== 12);
  const largeBanner = tagBanners.filter((e, i) => e.size === 12);
  console.log(smallBanner);
  console.log(largeBanner);

  return (
    <section className="tf-section porfolio">
      <div className="container-fluid">
        <div className="row mt-61 justify-content-center">
          <div className="col-11 mx-auto">
            <div className="row">
              {smallBanner.map((e, i) => (
                <div
                  key={e.id}
                  className={`col-11 col-md-8 col-lg-${e.size} mx-auto`}
                >
                  <div
                    className="tag-banner"
                    style={{ backgroundImage: `url(${e.image})` }}
                    alt="tag-banner-image"
                    data-aos="fade-up"
                    data-aos-offset="20"
                  >
                    <div className="tag-label">{e.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {largeBanner.map((e, i) => (
        <Banner key={e.i} banner={e} />
      ))}
    </section>
  );
};

export default TagBannerList;
