import { useState } from "react";
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
  fontWeight: 700,
  lineHeight: "40px",
  color: "#797A7E",
  borderRadius: "8px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: `2px solid ${theme.palette.color.pink}`,
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px",
  },
  legend: {
    display: "none",
  },
}));
const DropdownInput = ({ label, options }) => {
  const [value, setValue] = useState("id_1");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <FormItem className="row form-item">
      <div className="col-12 col-md-2">
        <Label className="form-label">{label}</Label>
      </div>
      <div className="col-12 col-md-10">
        <ComboBox className="form-input" value={value} onChange={onChange}>
          {options.map((option) => (
            <MenuItem value={option.id} key={option.id}>
              {option.title}
            </MenuItem>
          ))}
        </ComboBox>
      </div>
    </FormItem>
  );
};

export default DropdownInput;
DropdownInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};
DropdownInput.defaultProps = {
  label: "Label",
  options: [
    {
      id: "id_1",
      title: "Item 1",
    },
    {
      id: "id_2",
      title: "Item 2",
    },
    {
      id: "id_3",
      title: "Item 3",
    },
  ],
};
