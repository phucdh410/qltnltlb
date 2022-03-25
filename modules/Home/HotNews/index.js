import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Button, styled } from "@mui/material";

const ReadMoreBtn = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  background: theme.palette.color.pink,
  color: theme.palette.color.white,
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "45px",
  padding: "32px 69px",
  "&:hover": {
    background: theme.palette.color.pink,
  },
}));

const HotNews = () => {
  return (
    <div className="section-wrap hot-news" data-aos="fade-up">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-11 col-xxl-11 mx-auto">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              className="swiper-hot-news"
            >
              <SwiperSlide>
                <div className="swiper-news-item container">
                  <div className="col-8 col-md-9 col-lg-8 col-xl-10 col-xxl-8 news-image">
                    <img src="https://picsum.photos/968/500" alt="picture" />
                  </div>
                  <div className="col-10 col-md-10 col-lg-9 col-xl-11 col-xxl-9 news-label">
                    <p>
                      Vòng chung kết Hội thi Olympic các môn khoa học Mác - Lê
                      nin và tư tưởng Hồ Chí Minh năm 2019
                    </p>
                  </div>
                  <div className="news-btn">
                    <ReadMoreBtn variant="contained">Đọc thêm</ReadMoreBtn>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotNews;
