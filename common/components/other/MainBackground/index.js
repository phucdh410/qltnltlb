import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Button, styled } from "@mui/material";
import Slider from "react-slick";

const MainBannerButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.color.pink,
  color: theme.palette.color.white,
  zIndex: 1,
  padding: "12px 24px",
  fontWeight: 600,
  borderRadius: "12px",
  position: "relative",
  top: "60%",
  transform: "translateY(-60%)",
  "&:hover": {
    backgroundColor: theme.palette.color.pink,
  },
}));

const MainBackground = ({ banners }) => {
  const router = useRouter();

  const onClick = (link) => {
    // router.push(router.route + banner.link);

    router.push(link);
  };

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      <Slider {...settings} className="main-bg-container">
        {banners?.length > 0 &&
          banners.map((banner) => (
            <div key={banner._id}>
              <div
                className="main-bg"
                style={
                  banner.title !== "Default"
                    ? {
                        backgroundImage: `url(${banner.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              >
                {banner.title === "Default" && (
                  <div
                    className="container-fluid px-5"
                    style={{ paddingTop: "135px" }}
                  >
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8 float-right">
                      <img
                        src="/assets/images/global/banner-text.webp"
                        alt="banner-text"
                      />
                    </div>
                  </div>
                )}
                {banner.button !== "" && (
                  <div
                    className="col-12 text-center"
                    style={{ height: "100%" }}
                  >
                    <MainBannerButton
                      className=""
                      onClick={() => onClick(banner.link)}
                    >
                      {banner.button}
                    </MainBannerButton>
                  </div>
                )}
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MainBackground;
MainBackground.propTypes = {
  banners: PropTypes.array,
};
MainBackground.defaultProps = {
  banners: [
    {
      _id: "123456789abc",
      title: "Default",
      desciption: "Mô tả của banner",
      image: "/assets/images/global/banner-overlay.webp",
      imageThumb: "/assets/images/global/banner-overlay.webp",
      imageAlt: "image-alt",
      button: "",
      link: "",
    },
  ],
};
