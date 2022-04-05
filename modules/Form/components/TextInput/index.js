import { Box, InputLabel, OutlinedInput, styled } from "@mui/material";
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
const TextInput = ({ label, defaultValue, readOnly }) => {
  return (
    <FormItem className="row form-item">
      <div className="col-12 col-md-2">
        <Label className="form-label">{label}</Label>
      </div>
      <div className="col-12 col-md-10">
        <Input
          className="form-input"
          defaultValue={defaultValue}
          readOnly={readOnly}
        />
      </div>
    </FormItem>
  );
};

export default TextInput;
TextInput.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  readOnly: PropTypes.bool,
};
TextInput.defaultProps = {
  label: "Label",
  defaultValue: "",
  readOnly: false,
};
