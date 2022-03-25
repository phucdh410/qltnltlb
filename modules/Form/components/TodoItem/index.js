import React from "react";
import { styled, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import { DropdownInput, MultilineInput, UploadInput, Result } from "../index";

export const FormItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: "20px",
  color: theme.palette.color.pink,
}));
export const TodoLabel = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "28px",
  color: theme.palette.color.darkPurple,
  borderLeft: "5px solid",
  padding: "10px 24px",
  textAlign: "left",
}));

// formType = 0 => form đăng ký (mặc định)
// formType = 1 => form nộp minh chứng
// formType = 2 => form kết quả

const TodoItem = ({ index, formType, status, onClick }) => {
  let number = "";
  const text = ["nhất", "hai", "ba", "tư", "năm", "sáu", "bảy", "tám", "chín"];
  for (var i = 0; i < text.length; i++) {
    if (index === i) {
      number = text[i];
      break;
    }
  }

  return (
    <>
      <FormItem className="row form-item">
        <div className="col-10">
          <TodoLabel className="todo-label">{`Phần việc thứ ${number}`}</TodoLabel>
        </div>
        <div className="col-2" style={{ textAlign: "right" }}>
          <svg
            onClick={onClick}
            className="todo-icon"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 0.166016C9.49996 0.166016 0.166626 9.49935 0.166626 20.9994C0.166626 32.4994 9.49996 41.8327 21 41.8327C32.5 41.8327 41.8333 32.4994 41.8333 20.9994C41.8333 9.49935 32.5 0.166016 21 0.166016ZM31.4166 23.0827H23.0833V31.416H18.9166V23.0827H10.5833V18.916H18.9166V10.5827H23.0833V18.916H31.4166V23.0827Z"
              fill="#A000A2"
            />
          </svg>
        </div>
      </FormItem>

      {/* Truyền prop options là danh sách dropdown */}
      <DropdownInput label="Lĩnh vực" />
      <MultilineInput label="Nội dung đăng ký" />

      {formType === 1 ? <UploadInput /> : null}
      {formType === 2 ? <Result status={status} /> : null}
    </>
  );
};

export default TodoItem;
TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  formType: PropTypes.number,
  onClick: PropTypes.func,
};
TodoItem.defaultProps = {
  formType: 0,
  onClick: () => {},
};
