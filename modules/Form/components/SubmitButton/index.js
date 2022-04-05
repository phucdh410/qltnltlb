import { Button, styled } from "@mui/material";
import PropTypes from "prop-types";

const NewButton = styled(Button)(({ theme }) => ({
  background: theme.palette.color.pink,
  color: theme.palette.color.white,
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "27.5px",
  margin: "20px 0 30px",
  borderRadius: "13px",
  padding: "12px 40px",
  "&:hover": {
    background: theme.palette.color.pink,
  },
  ["@media(max-width:1599px)"]: {
    fontSize: "18px",
    padding: "8px 24px",
  },
  ["@media(max-width:1024px)"]: {
    fontSize: "14px",
    padding: "6px 18px",
  },
}));

const SubmitButton = ({ label, type, onClick, disabled }) => {
  return (
    <NewButton
      disabled={disabled}
      type={type}
      variant="contained"
      onClick={onClick}
    >
      {label}
    </NewButton>
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
SubmitButton.defaultProps = {
  label: "Button",
  type: "button",
  onClick: () => {},
  disabled: false,
};
