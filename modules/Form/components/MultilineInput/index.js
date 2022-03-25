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
  fontWeight: 700,
  lineHeight: "40px",
  color: "#797A7E",
  borderRadius: "8px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: `2px solid ${theme.palette.color.pink}`,
  },
  "& .MuiOutlinedInput-input": {
    padding: "16px 10px",
  },
  legend: {
    display: "none",
  },
}));
const MultilineInput = ({ label, rows }) => {
  return (
    <FormItem className="row form-item">
      <div className="col-12 col-md-3">
        <Label className="form-label">{label}</Label>
      </div>
      <div className="col-12">
        <Input className="form-input" multiline rows={rows} />
      </div>
    </FormItem>
  );
};

export default MultilineInput;
MultilineInput.propTypes = {
  label: PropTypes.string,
  rows: PropTypes.number,
};
MultilineInput.defaultProps = {
  label: "Label",
  rows: 4,
};
