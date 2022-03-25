import { Box, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";

export const BoxForm = styled(Box)(({ theme }) => ({
  background: theme.palette.color.white,
  borderRadius: "12px",
  boxShadow: "8.27497px 16.5499px 20.6874px rgba(229, 91, 230, 0.5)",
}));
export const FormTitle = styled(Typography)(({ theme }) => ({
  padding: "20px 60px",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "45px",
  color: theme.palette.color.white,
  backgroundColor: theme.palette.color.pink,
  borderTopLeftRadius: "inherit",
  borderTopRightRadius: "inherit",
  textAlign: "center",
  textTransform: "uppercase",
}));
export const FormContent = styled(Box)(({ theme }) => ({
  padding: "12px 60px",
  "&> :last-child:not(button)": {
    paddingBottom: "100px",
  },
}));

const FormContainer = ({ title, children }) => {
  return (
    <div className="section-wrap">
      <BoxForm className="my-form">
        <FormTitle className="form-title">{title}</FormTitle>
        <FormContent className="form-content">{children}</FormContent>
      </BoxForm>
    </div>
  );
};

export default FormContainer;
FormContainer.propTypes = {
  title: PropTypes.string,
};
FormContainer.defaultProps = {
  title: "Form Example",
};
