import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { BannerButton } from "../../control";

const Banner = ({ banner }) => {
  const router = useRouter();
  const [withBtn, setWithBtn] = useState(false);

  useEffect(() => {
    if (banner.button + banner.link !== "") {
      setWithBtn(true);
    }
  }, [banner]);

  const onClick = (banner) => {
    //console.log(banner.link);
    router.push(`${router.route}${banner.link}`);
  };

  return (
    <div className="section-wrap banner" data-aos="fade-up">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 px-0">
            <div className="banner-container">
              <img
                className="banner-img"
                src={banner.image}
                alt={banner.imageAlt}
              />
              {withBtn && (
                <BannerButton
                  label={banner.button}
                  onClick={() => onClick(banner)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  banner: PropTypes.object,
};
Banner.defaultProps = {
  banner: {
    image: "https://picsum.photos/1920/627",
    imageAlt: "image",
    button: "",
    link: "",
  },
};
