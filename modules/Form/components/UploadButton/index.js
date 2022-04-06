import { Button, styled } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const UploadButton = ({ onFileAdd }) => {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <label style={{ color: "#797A7E", marginLeft: "20px" }}>
      <Input
        onChange={onFileAdd}
        accept="image/*,.pdf"
        id="contained-button-file"
        type="file"
      />
      <Button
        variant="standard"
        component="span"
        endIcon={<CloudUpload />}
        className="form-label"
        sx={{ textTransform: "none", fontWeight: 700 }}
      >
        Chọn tệp
      </Button>
    </label>
  );
};
export default UploadButton;
