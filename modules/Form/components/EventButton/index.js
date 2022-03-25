import React from "react";
import { Print } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import PropTypes from "prop-types";

const NewButton = styled(Button)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 700,
  lineHeight: "37px",
  textTransform: "none",
  textDecorationLine: "underline",
  color: "#F1693E",
  padding: "6px 10px",
  "& .MuiButton-endIcon": {
    marginLeft: "6px",
  },
  "& svg": {
    fontSize: "inherit!important",
  },
  "&.MuiButton-root:hover": {
    textDecoration: "underline",
  },
}));

const EventButton = ({ label, icon, onClick, htmlFor }) => {
  return (
    <NewButton
      htmlFor={htmlFor}
      variant="standard"
      endIcon={icon}
      onClick={onClick}
    >
      {label}
    </NewButton>
  );
};

export default EventButton;
EventButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  onClick: PropTypes.func,
  htmlFor: PropTypes.string,
};
EventButton.defaultProps = {
  label: "Button",
};
