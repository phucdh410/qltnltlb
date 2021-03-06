import { Button, styled } from "@mui/material";

const styles = {
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -70%)",
};
const NewButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.color.pink,
  color: theme.palette.color.white,
  padding: "12px 24px",
  fontWeight: 600,
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: theme.palette.color.pink,
  },
}));

const BannerButton = ({ label, onClick }) => {
  return (
    <div style={styles}>
      <NewButton className="banner-btn" onClick={onClick}>
        {label}
      </NewButton>
    </div>
  );
};
export default BannerButton;
