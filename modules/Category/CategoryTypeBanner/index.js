import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Banner } from "common/components/other";

const CategoryTypeBanner = ({ tagBanners }) => {
  const smallBanner = tagBanners.filter((e, i) => e.size !== 12);
  const largeBanner = tagBanners.filter((e, i) => e.size === 12);
  return (
    <section className="tf-section porfolio">
      <div className="container-fluid">
        <div className="row mt-61 justify-content-center">
          <div className="col-11 mx-auto">
            <div className="row">
              {smallBanner.map((e, i) => (
                <Link key={e._id} href={e.slug} passHref>
                  <div className={`col-11 col-md-8 col-lg-${e.size} mx-auto`}>
                    <div
                      className="tag-banner"
                      style={{
                        backgroundImage: `url(${encodeURI(e.image)})`,
                      }}
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
          key={e._id}
          title={e.title}
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

export default CategoryTypeBanner;
