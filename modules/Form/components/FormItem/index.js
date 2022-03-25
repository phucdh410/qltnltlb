import { Box, styled } from "@mui/material";
const NewBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: "20px",
  color: theme.palette.color.pink,
}));

const FormItem = ({ children }) => {
  return <NewBox className="row form-item">{children}</NewBox>;
};
export default FormItem;
