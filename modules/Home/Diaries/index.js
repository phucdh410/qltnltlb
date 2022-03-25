import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Card, CardActionArea } from "@mui/material";
import Slider from "react-slick";
import { GetDimension } from "../../../utils/func";
import {
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../common/components/other";

const Diaries = ({ diaries }) => {
  const [settings, setSettings] = useState({
    infinity: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: <LeftArrowIcon />,
    nextArrow: <RightArrowIcon />,
  });

  //Thay đổi số slide hiển thị dựa theo currentWidth / (breakpoint)
  const handleResize = useCallback((window) => {
    // Hàm GetDimension lấy ra height/width hiện tại của màn hình
    const currentWidth = GetDimension(window).x;
    switch (true) {
      case currentWidth >= 1440:
        setSettings({ ...settings, slidesToShow: 2 });
        break;

      case currentWidth >= 0:
        setSettings({ ...settings, slidesToShow: 1 });
        break;
      default:
        setSettings({ ...settings, slidesToShow: 2 });
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
    <div className="section-wrap diaries">
      <div className="diaries-title text-center">
        <p>NHẬT KÝ THANH NIÊN HCMUE</p>
        <p>HỌC TẬP VÀ LÀM THEO LỜI BÁC</p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-11 col-lg-9 col-xxl-11 mx-auto">
            <Slider {...settings} className="diaries-slider-container">
              {diaries &&
                diaries.length > 0 &&
                diaries.map((diary) => (
                  <div key={diary.id} className="card-container">
                    <Card className="card-profile">
                      <div className="card-content">
                        <div className="container px-0">
                          <div className="row">
                            <div className="col-5 diaries-image">
                              <img src={diary.image} alt={diary.name} />
                            </div>
                            <div className="col-7 diaries-info">
                              <div className="name">
                                <p>{diary.name}</p>
                              </div>
                              <div className="khoa">
                                <p>{diary.khoa}</p>
                              </div>
                              <div className="department">
                                <p>{diary.department}</p>
                              </div>
                              <div className="achievement">
                                <p>{diary.achievement}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container px-0">
                          <div className="row">
                            <div className="col-12">
                              <div className="hobby">
                                <p>{diary.hobby}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diaries;
