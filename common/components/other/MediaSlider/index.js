import React, { useCallback, useEffect, useState } from "react";
import { YoutubeEmbed } from "../../../../common/components/other/";
import Slider from "react-slick";
import { GetDimension } from "../../../../utils/func";

const MediaSlider = ({ blogs }) => {
  const [settings, setSettings] = useState({
    infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
