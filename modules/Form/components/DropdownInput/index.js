import { useState, memo } from "react";
import { Box, InputLabel, Select, MenuItem, styled } from "@mui/material";
import PropTypes from "prop-types";

export const FormItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: "20px",
  color: theme.palette.color.pink,
}));
export const Label = styled(InputLabel)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "27px",
  color: "inherit",
  overflow: "visible",
  textAlign: "left",
  padding: "15px 0",
}));
export const ComboBox = styled(Select)(({ theme }) => ({
  padding: 0,
  textAlign: "left",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "32px",
  color: "#797A7E",
  borderRadius: "8px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: `2px solid ${theme.palette.color.pink}`,
    top: 0,
  },
  "& .MuiSvgIcon-root": {
    borderTopRightRadius: "inherit",
    borderBottomRightRadius: "inherit",
    background: theme.palette.color.pink,
    color: theme.palette.color.white,
    height: "100%",
    width: "2em",
    right: 0,
    top: 0,
    "&.MuiSelect-iconOpen": {
      transform: "rotateX(180deg)",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 20px",
  },
  legend: {
    display: "none",
  },
}));
const DropdownInput = memo(
  ({ type, id, name, label, options, value, onChange, readOnly }) => {
    return (
      <FormItem className="row form-item">
        <div className="col-12 col-md-2">
          <Label className="form-label">{label}</Label>
        </div>
        <div className="col-12 col-md-10">
          <ComboBox
            className={`form-input dropdown-input ${type === "year" && "year"}`}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
          >
            {options.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.name}
              </MenuItem>
            ))}
          </ComboBox>
        </div>
      </FormItem>
    );
  }
);

DropdownInput.displayName = "DropdownInput";
export default DropdownInput;
DropdownInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};
DropdownInput.defaultProps = {
  label: "Label",
  type: "",
  options: [
    {
      _id: "id_1",
      name: "Item 1",
    },
    {
      _id: "id_2",
      name: "Item 2",
    },
    {
      _id: "id_3",
      name: "Item 3",
    },
  ],
};
