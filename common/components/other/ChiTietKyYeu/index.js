import React from "react";
import { Box, Button, CardMedia, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const MainInfo = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  fontWeight: 700,
  fontFamily: "Arial",
  lineHeight: "55px",
  textAlign: "left",
  color: theme.palette.color.kyyeuTitle,
  marginBottom: "20px",
}));
const AchieveLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.color.pink,
  color: theme.palette.color.white,
  borderRadius: "13px",
  fontSize: "32px",
  fontWeight: 700,
  fontFamily: "Arial",
  lineHeight: "45px",
  display: "inline-block",
  padding: "20px 30px",
  marginBottom: "20px",
  textTransform: "uppercase",
}));
const Year = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial",
  fontSize: "42px",
  fontWeight: 700,
  lineHeight: "48px",
  color: theme.palette.color.kyyeuYear,
  borderLeft: "20px solid",
  paddingLeft: "20px",
  marginBottom: "20px",
}));
const AchieveBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.color.kyyeuDetailBg,
  padding: "20px",
}));
const AchieveContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.kyyeuText,
  fontSize: "30px",
  lineHeight: "34.5px",
  fontFamily: "Arial",
  fontWeight: 400,
  padding: "20px 25px",
}));
const BackButton = styled(Button)(({ theme }) => ({
  fontFamily: "Arial",
  fontSize: "32px",
  lineHeight: "45px",
  fontWeight: 700,
  backgroundColor: theme.palette.color.pink,
  color: theme.palette.color.white,
  marginLeft: "auto",
  marginRight: "auto",
  padding: "30px",
}));

const ChiTietKyYeu = ({ avatar, fullname, department, achievement, id }) => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  return (
    <div className="section-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row student-detail">
              <div className="col-7 col-sm-12 col-md-5 col-lg-5 col-xl-6 col-xxl-4 mx-auto">
                <div className="student-avatar">
                  <img src={avatar} alt={fullname} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-6 col-xxl-8">
                <MainInfo className="student-main-info">{fullname}</MainInfo>
                <MainInfo className="student-main-info">{department}</MainInfo>
                <AchieveLabel className="student-achievement-label">
                  Thành tích
                </AchieveLabel>
                {achievement &&
                  achievement.length > 0 &&
                  achievement.map((achive) => (
                    <div key={achive.id} style={{ marginBottom: "40px" }}>
                      <Year className="student-year">{`Năm ${achive.year}`}</Year>
                      <AchieveBox className="student-achievement-box">
                        {achive.content.split("\n").map((content, i) => (
                          <AchieveContent
                            key={i}
                            className="student-achievement-content"
                          >
                            {content}
                          </AchieveContent>
                        ))}
                      </AchieveBox>
                    </div>
                  ))}
              </div>
              <div className="col-12 text-center">
                <BackButton
                  variant="contained"
                  className="btn-back"
                  onClick={onClick}
                >
                  Quay lại danh sách
                </BackButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietKyYeu;

ChiTietKyYeu.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  avatar: PropTypes.string,
  fullname: PropTypes.string,
  department: PropTypes.string,
  achievement: PropTypes.array,
};
ChiTietKyYeu.defaultProps = {
  id: "student-1",
  username: "43.01.104.001",
  fullname: "Đặng Hoàng Phúc",
  department: "CNTT",
  avatar: "https://picsum.photos/574/765",
  achievement: [
    {
      id: 1,
      year: 2020,
      content:
        "- Điểm học tập: 7.5 \n - Điểm rèn luyện: 7.5 \n - Xếp loại đoàn viên: tốt \n - Thành tích 1: asd \n - Thành tích 2: asdasd",
    },
    {
      id: 2,
      year: 2021,
      content:
        "- Điểm học tập: 7.5 \n - Điểm rèn luyện: 7.5 \n - Xếp loại đoàn viên: tốt \n - Thành tích 1: asd \n - Thành tích 2: asdasd",
    },
  ],
};
