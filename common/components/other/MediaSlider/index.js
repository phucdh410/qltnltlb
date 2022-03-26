import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import { GetDimension } from "utils/func";
import { ReadMoreButton } from "common/components/control";
import PropTypes from "prop-types";
import { LeftArrowIcon, RightArrowIcon, YoutubeEmbed } from "../";

const MediaSlider = ({ description, blogs, title, url }) => {
  const [settings, setSettings] = useState({
    infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <LeftArrowIcon />,
    nextArrow: <RightArrowIcon />,
  });

  const handleResize = useCallback((window) => {
    const currentWidth = GetDimension(window).x;
    switch (true) {
      case currentWidth >= 1440:
        setSettings({ ...settings, slidesToShow: 3, slidesToScroll: 2 });
        break;
      case currentWidth >= 1024:
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
    <div className="row slider-container" data-aos="fade-up">
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
      <div className="col-12">
        <Slider {...settings} className="media-slider">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <YoutubeEmbed embedId={blog.embedId} />
              <div className="primary-text text-center">
                <p>{blog.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MediaSlider;
MediaSlider.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
MediaSlider.defaultProps = {
  description: "",
  title: "Title Example",
};
