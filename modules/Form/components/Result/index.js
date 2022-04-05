import React from "react";
import { styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormItem, Label } from "../";

const ResultTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#797A7E",
  fontWeight: 700,
}));
const useStyles = makeStyles((theme) => ({
  active: {
    color: theme.palette.color.pink,
  },
}));
// status = 0 => Đã đăng ký
// status = 1 => Đăng ký thành công
// status = 2 => Chưa nộp minh chứng
// status = 3 => Đã hoàn thành
const Result = ({ status }) => {
  // Nhận prop là type mô tả trạng thái hiện tại của phần việc
  const classes = useStyles();
  return (
    <FormItem>
      <div className="col-12 col-md-2">
        <Label>Kết quả</Label>
      </div>
      <div className="col-12 col-md-10">
        <ResultTypography
          component="span"
          className={status === 0 && classes.active}
        >
          Đã đăng ký
        </ResultTypography>
        <ResultTypography component="span"> / </ResultTypography>
        <ResultTypography
          component="span"
          className={status === 1 && classes.active}
        >
          Đăng ký thành công
        </ResultTypography>
        <ResultTypography component="span"> / </ResultTypography>
        <ResultTypography
          component="span"
          className={status === 2 && classes.active}
        >
          Chưa nộp minh chứng
        </ResultTypography>
        <ResultTypography component="span"> / </ResultTypography>
        <ResultTypography
          component="span"
          className={status === 3 && classes.active}
        >
          Đã hoàn thành
        </ResultTypography>
      </div>
    </FormItem>
  );
};

export default Result;
