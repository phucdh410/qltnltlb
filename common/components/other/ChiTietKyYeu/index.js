import React from "react";
import { Box, Button, CardMedia, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const MainInfo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: "Arial",
  textAlign: "left",
  color: theme.palette.color.kyyeuTitle,
}));
const AchieveLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.color.pink,
  color: theme.palette.color.white,
  fontWeight: 700,
  fontFamily: "Arial",
  display: "inline-block",
  textTransform: "uppercase",
}));
const Year = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial",
  fontWeight: 700,
  color: theme.palette.color.kyyeuYear,
}));
const AchieveBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.color.kyyeuDetailBg,
}));
const AchieveContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.kyyeuText,
  fontFamily: "Arial",
  fontWeight: 400,
}));
const BackButton = styled(Button)(({ theme }) => ({
  fontFamily: "Arial",
  fontWeight: 700,
  backgroundColor: theme.palette.color.pink,
  color: theme.palette.color.white,
  margin: "auto",
}));

const ChiTietKyYeu = ({ avatar, fullname, department, achievement, id }) => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  return (
    <div className="section-wrap large">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row student-detail">
              <div className="col-8 col-sm-12 col-md-5 col-lg-5 col-xl-6 col-xxl-4 mx-auto">
                <div className="student-avatar">
                  <img src={avatar} alt={fullname} />
                </div>
              </div>
              <div className="col-xxl-1 px-0"></div>
              <div className="col-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 col-xxl-7">
                <MainInfo className="student-main-info">{fullname}</MainInfo>
                <MainInfo className="student-main-info">{department}</MainInfo>
                <AchieveLabel className="student-achievement-label">
                  Th??nh t??ch
                </AchieveLabel>
                {achievement &&
                  achievement.length > 0 &&
                  achievement.map((achive) => (
                    <div key={achive.id} style={{ marginBottom: "70px" }}>
                      <Year className="student-year">{`N??m ${achive.year}`}</Year>
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
                  Quay l???i danh s??ch
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
  fullname: "?????ng Ho??ng Ph??c",
  department: "CNTT",
  avatar: "https://picsum.photos/574/765",
  achievement: [
    {
      id: 1,
      year: 2020,
      content:
        "- ??i???m h???c t???p: 7.5 \n - ??i???m r??n luy???n: 7.5 \n - X???p lo???i ??o??n vi??n: t???t \n - Th??nh t??ch 1: asd \n - Th??nh t??ch 2: asdasd",
    },
    {
      id: 2,
      year: 2021,
      content:
        "- ??i???m h???c t???p: 7.5 \n - ??i???m r??n luy???n: 7.5 \n - X???p lo???i ??o??n vi??n: t???t \n - Th??nh t??ch 1: asd \n - Th??nh t??ch 2: asdasd",
    },
  ],
};
