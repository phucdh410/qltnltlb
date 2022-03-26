import React, { useState, useEffect, useCallback } from "react";
import { GetDimension } from "utils/func";
import { LeftArrowIcon, RightArrowIcon } from "../";
import { ReadMoreButton } from "common/components/control";
import PropTypes from "prop-types";
import Slider from "react-slick";

const ImageSlider = ({ description, blogs, title, url }) => {
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <LeftArrowIcon />,
    nextArrow: <RightArrowIcon />,
  });

  //Thay đổi số slide hiển thị dựa theo currentWidth / (breakpoint)
  const handleResize = useCallback((window) => {
    // Hàm GetDimension lấy ra height/width hiện tại của màn hình
    const currentWidth = GetDimension(window).x;
    switch (true) {
      case currentWidth >= 1440:
        setSettings({ ...settings, slidesToShow: 4, slidesToScroll: 4 });
        break;
      case currentWidth >= 1024:
        setSettings({ ...settings, slidesToShow: 3, slidesToScroll: 3 });
        break;
      case currentWidth >= 768:
        setSettings({ ...settings, slidesToShow: 2, slidesToScroll: 2 });
        break;
      case currentWidth >= 0:
        setSettings({ ...settings, slidesToShow: 1, slidesToScroll: 1 });
        break;
      default:
        setSettings({ ...settings });
        break;
    }
  }, []);

  useEffect(() => {
    if (window) {
      handleResize(window);
    }
    window.addEventListener("resize", () => handleResize(window));
    return () =>
      window.removeEventListener("resize", () => handleResize(window));
  }, [handleResize]);
  return (
    <div
      className="row justify-content-center slider-container"
      data-aos="fade-up"
    >
      <div className="col-11 mx-auto" style={{ marginTop: "30px" }}>
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-8 col-lg-10">
            <div className="primary-title">
              {description === "" && <p>{title}</p>}
            </div>
          </div>
          <div className="col-4 col-lg-2">
            <ReadMoreButton url={url} />
          </div>
        </div>
      </div>
      <div className="col-11 mx-auto">
        <Slider {...settings} className="row image-slider">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => (
              <div key={blog.id} className="image-item">
                <img src={blog.image} alt={blog.title} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;

ImageSlider.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
ImageSlider.defaultProps = {
  description: "",
  title: "Title Example",
};
