import React from "react";
import Image from "next/image";
import Banner from "../Banner";
import Link from "next/link";

const tagBanners = [
  {
    id: 1,
    title: "Cuộc đời và hoạt động của Bác",
    image: "https://picsum.photos/828/436",
    size: 6,
    link: "/",
    slug: "#",
  },
  {
    id: 2,
    title: "Hình ảnh tư liệu về Bác",
    image: "https://picsum.photos/828/436",
    size: 6,
    link: "/",
    slug: "#",
  },
  {
    id: 3,
    title: "Những mẫu chuyện về Bác",
    image: "https://picsum.photos/828/436",
    size: 6,
    link: "/",
    slug: "#",
  },
  {
    id: 4,
    title: "Phim tư liệu về Bác",
    image: "https://picsum.photos/828/436",
    size: 6,
    link: "/",
    slug: "#",
  },
  {
    id: 5,
    title: "Địa danh lịch sử",
    image: "https://picsum.photos/828/436",
    size: 12,
    link: "asdas",
    slug: "asdasd",
  },
];
const TagBannerList = ({ tagBanners }) => {
  const smallBanner = tagBanners.filter((e, i) => e.size !== 12);
  const largeBanner = tagBanners.filter((e, i) => e.size === 12);

  return (
    <section className="tf-section porfolio">
      <div className="container-fluid">
        <div className="row mt-61 justify-content-center">
          <div className="col-11 mx-auto">
            <div className="row">
              {smallBanner.map((e, i) => (
                <Link key={e.id} href={e.slug} passHref>
                  <div className={`col-11 col-md-8 col-lg-${e.size} mx-auto`}>
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {largeBanner.map((e, i) => (
        <Banner
          key={e.id}
          button={e.button}
          link={e.link}
          image={e.image}
          slug={e.slug}
          imageAlt={e.imageAlt}
        />
      ))}
    </section>
  );
};

export default TagBannerList;
