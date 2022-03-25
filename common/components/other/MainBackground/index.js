import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Button, styled } from "@mui/material";

const MainBannerButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.color.pink,
  color: theme.palette.color.white,
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

const MainBackground = ({ banner }) => {
  const router = useRouter();
  const [withBtn, setWithBtn] = useState(false);
  useEffect(() => {
    if (banner.button + banner.link !== "") {
      setWithBtn(true);
    }
  }, [banner]);

  const onClick = () => {
    // router.push(router.route + banner.link);
    router.push(banner.link);
  };
  return (
    <div
      className="main-bg"
      style={
        banner.title === "Default"
          ? {
              backgroundImage: `url(${banner.image}),linear-gradient(180deg, #fef0ff 0%, #ffb9fd 100%)`,
            }
          : { backgroundImage: `url(${banner.image})` }
      }
    >
      {banner.title === "Default" && (
        <div className="container-fluid px-5" style={{ paddingTop: "135px" }}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8 float-right">
            <img
              src="/assets/images/global/banner-text.webp"
              alt="banner-text"
            />
          </div>
        </div>
      )}
      {withBtn && (
        <div className="col-12 text-center" style={{ height: "100%" }}>
          <MainBannerButton className="" onClick={onClick}>
            {banner.button}
          </MainBannerButton>
        </div>
      )}
    </div>
  );
};

export default MainBackground;
MainBackground.propTypes = {
  banner: PropTypes.object,
};
MainBackground.defaultProps = {
  banner: {
    id: "",
    title: "Default",
    desciption: "Mô tả của banner",
    image: "/assets/images/global/banner-overlay.webp",
    imageThumb: "/assets/images/global/banner-overlay.webp",
    imageAlt: "image-alt",
    button: "",
    link: "",
  },
};
