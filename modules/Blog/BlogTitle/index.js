import React from "react";
import { styled, Typography } from "@mui/material";
import styles from "styles/Blog.module.scss";
import theme from "theme/theme";
import { makeStyles } from "@mui/styles";

const content = "CÔNG TÁC GIÁO DỤC";
const title =
  "TUỔI TRẺ TRƯỜNG ĐẠI HỌC SƯ PHẠM TP. HỒ CHÍ MINH SÔI NỔI KHỞI ĐỘNG THÁNG THANH NIÊN NĂM 2022";
const createdBy = "Bùi Đông Nhật";
const createdDate = "Thứ ba, 09/03/2022 07:30";
const viewCount = 9;

const useStyles = makeStyles((theme) => ({
  Content: {
    fontWeight: 700,
    color: theme.palette.color.pink,
  },
  Title: {
    fontWeight: 700,
    color: theme.palette.color.darkPurple,
  },
  Info: {
    fontWeight: 400,
    color: theme.palette.color.pink,
  },
}));

// const Content = styled(Typography)(({ theme }) => ({
//   // fontSize: "24px",
//   fontWeight: 700,
//   // lineHeight: "28px",
//   color: theme.palette.color.pink,
// }));
// const Title = styled(Typography)(({ theme }) => ({
//   // fontSize: "42px",
//   fontWeight: 700,
//   // lineHeight: "48px",
//   color: theme.palette.color.darkPurple,
// }));
// const Info = styled(Typography)(({ theme }) => ({
//   // fontSize: "24px",
//   fontWeight: 400,
//   // lineHeight: "28px",
//   color: theme.palette.color.pink,
// }));

const BlogTitle = (
  {
    //   createdBy,
    //   createdDate,
    //   viewCount,
    //   title,
    //   image,
    //   content,
    //   description,
  }
) => {
  const classes = useStyles();

  return (
    <div className={`section-wrap ${styles.blog__title}`}>
      <div className="row">
        <div className="col-12 col-md-12">
          <Typography
            className={`${styles.title__text} ${styles.__content} ${classes.Content}`}
          >
            {content}
          </Typography>
          <div className="col-12 col-md-9 mx-auto">
            <Typography
              className={`${styles.title__text} ${styles.__title} ${classes.Title}`}
            >
              {title}
            </Typography>
          </div>
          <div className="col-12 col-md-12">
            <Typography
              className={`${styles.title__text} ${styles.__info} ${classes.Info}`}
            >
              <strong>{createdBy}</strong> - {createdDate} - {viewCount} lượt
              xem
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;
