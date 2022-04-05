import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

const Topics = () => {
  const { topics } = useSelector((state) => ({
    topics: state.topic.topics,
  }));

  const [limitShow, setLimitShow] = useState(3);

  const handleScreenWidth = useCallback((width) => {
    switch (true) {
      case width <= 768:
        setLimitShow(1);
        break;
      case width >= 1400:
        setLimitShow(3);
        break;
      case width >= 800:
        setLimitShow(2);
        break;
      default:
        setLimitShow(3);
        break;
    }
  }, []);

  useEffect(() => {
    if (window) {
      handleScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", () =>
      handleScreenWidth(window.innerWidth)
    );
    return () =>
      window.removeEventListener("resize", () =>
        handleScreenWidth(window.innerWidth)
      );
  });

  return (
    <div className="container-fluid" data-aos="fade-up" data-aos-offset="30">
      <div className="row">
        <div className="col-10 col-sm-10 col-md-5 col-lg-8 col-xl-8 col-xxl-10 mx-auto">
          <div className="swiper-box">
            <Swiper
              slidesPerView={limitShow}
              spaceBetween={62}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {topics?.length > 0 &&
                topics.map((topic, i) => (
                  <SwiperSlide key={i}>
                    <Link href={`topic/${topic.slug}`} passHref>
                      <div
                        className="slide-item"
                        style={{ backgroundImage: `url(${topic.image})` }}
                      >
                        <div className="slide-label">
                          <p>{topic.name}</p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
