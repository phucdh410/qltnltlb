import { Menu, ArrowRightAlt } from "@mui/icons-material";
import { IconButton, styled } from "@mui/material";

const HamburgerBtn = styled(IconButton)(({ theme }) => ({
  textAlign: "right",
  borderRadius: "unset",
  backgroundColor: "bisque",
  float: "right",
}));

const SubmenuBtn = () => {
  return (
    <HamburgerBtn
      className="canvas-toggler"
      data-bs-toggle="offcanvas"
      data-bs-target="#submenu"
    >
      <Menu className="icon close" />
      <ArrowRightAlt className="icon open" />
    </HamburgerBtn>
  );
};
export default SubmenuBtn;
