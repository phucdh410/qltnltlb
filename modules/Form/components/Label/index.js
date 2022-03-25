import { InputLabel, styled } from "@mui/material";
import PropTypes from "prop-types";
const NewInputLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "27px",
  color: "inherit",
  overflow: "visible",
  textAlign: "left",
  padding: "15px 0",
}));

const Label = ({ children, sx }) => {
  return (
    <NewInputLabel sx={sx} className="form-label">
      {children}
    </NewInputLabel>
  );
};

export default Label;
Label.propTypes = {
  sx: PropTypes.object,
};
