import { useState } from "react";
import { Box, InputLabel, OutlinedInput, styled, Tooltip } from "@mui/material";
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
export const Input = styled(OutlinedInput)(({ theme }) => ({
  padding: 0,
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "40px",
  color: "#797A7E",
  borderRadius: "8px",
  "& .MuiOutlinedInput-notchedOutline": {
    top: 0,
    border: `2px solid ${theme.palette.color.pink}`,
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 20px",
  },
  legend: {
    display: "none",
  },
}));
const NumberInput = ({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  errors,
  helperText,
}) => {
  const minValue = 2022;
  const maxValue = 2072;

  return (
    <FormItem className="row form-item">
      <div className="col-12 col-md-2">
        <Label className="form-label">{label}</Label>
      </div>
      <div className="col-3 col-md-3">
        <Tooltip
          open={errors || false}
          title={helperText || ""}
          disableHoverListener
          arrow
        >
          <Input
            className="form-input"
            type="number"
            inputProps={{ min: minValue, max: maxValue }}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Tooltip>
      </div>
    </FormItem>
  );
};

export default NumberInput;
NumberInput.propTypes = {
  label: PropTypes.string,
};
NumberInput.defaultProps = {
  label: "Label",
};
