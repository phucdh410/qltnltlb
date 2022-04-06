import React from "react";
import { styled, Typography } from "@mui/material";
import { FormItem, Label } from "../";

const ResultTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#797A7E",
  fontWeight: 700,
}));
// approved = 0 => Đăng ký thành công
// approved = 1 => Đã nộp minh chứng
// approved = 2 => Đã hoàn thành
// approved = -1 => Bị từ chối
const Result = ({ approved }) => {
  // Nhận prop là type mô tả trạng thái hiện tại của phần việc
  return (
    <FormItem>
      <div className="col-12 col-md-2">
        <Label>Kết quả</Label>
      </div>
      <div className="col-12 col-md-10" style={{ textAlign: "left" }}>
        <ResultTypography component="span">
          {approved === 0 && "Đăng ký thành công"}
          {approved === 1 && "Đã nộp minh chứng"}
          {approved === 2 && "Đã hoàn thành"}
          {approved === -1 && "Bị từ chối"}
        </ResultTypography>
      </div>
    </FormItem>
  );
};

export default Result;
