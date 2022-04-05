import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Button, styled } from "@mui/material";
import Link from "next/link";

const ReadMoreBtn = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  background: theme.palette.color.pink,
  color: theme.palette.color.white,
  fontWeight: 700,
  "&:hover": {
    background: theme.palette.color.pink,
  },
}));

const HotNews = ({ pinnedBlogs }) => {
  return (
    <div className="section-wrap hot-news" data-aos="fade-up">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-11 mx-auto">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              className="swiper-hot-news"
            >
              {pinnedBlogs?.length > 0 &&
                pinnedBlogs.map((pinnedBlog) => (
                  <SwiperSlide key={pinnedBlog._id}>
                    <div className="swiper-news-item row">
                      <div className="col-9 col-md-9 col-lg-8 col-xl-8 col-xxl-7 news-image">
                        <img src={pinnedBlog.image} alt={pinnedBlog.imageAlt} />
                      </div>
                      <div className="col-10 col-md-9 col-lg-9 col-xl-8 col-xxl-7 mx-auto news-label">
                        <p>{pinnedBlog.title}</p>
                      </div>
                      <Link href={`blog/${pinnedBlog.slug}`} passHref>
                        <div className="news-btn">
                          <ReadMoreBtn variant="contained">
                            Đọc thêm
                          </ReadMoreBtn>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotNews;
