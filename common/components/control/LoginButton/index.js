import { useEffect, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Avatar, Button, Menu, MenuItem, styled } from "@mui/material";
import { LoginModal } from "common/components/other";
import { onLogout } from "store/actions/authAction";
import { PropTypes } from "prop-types";
import { shallowEqual, useDispatch, useSelector, useStore } from "react-redux";
import { toast } from "react-toastify";
import Link from "next/link";

const LoginBtn = styled(Button)(({ theme }) => ({
  height: "100%",
  maxWidth: "170px",
  float: "right",
  padding: "16px 14px",
  whiteSpace: "normal",
  letterSpacing: "0em",
  lineHeight: "18px",
  fontSize: "16px",
  fontWeight: 700,
  backgroundColor: theme.palette.color.white,
  color: theme.palette.color.pink,
  borderRadius: "0 0 13px 13px",
  boxShadow: "-1px 8px 13px rgba(229, 91, 230, 0.5)",
  "& .MuiButton-startIcon": {
    // marginRight: 0,
    "& svg": {
      fontSize: "40px",
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.color.white,
  },
}));

const LoginButton = ({ label, className }) => {
  const [open, setOpen] = useState(false); // Open modal login
  const [anchorEl, setAnchorEl] = useState(null); // Xử lí dropdown options khi đã login
  const openDropdown = Boolean(anchorEl); // Xử lí dropdown options khi đã login
  //const logoutUser = useStore().getState.auth; // Lấy ra state mới nhất ngay sau khi dispatch logout
  const [currentUser, setCurrentUser] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state) => ({
      user: state.auth.user,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user]);

  const handleOpenLogin = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };
  const handleLogout = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logOut = async () => {
    setAnchorEl(null);
    await dispatch(onLogout());
    toast.success("Đăng xuất thành công !");
    setCurrentUser(undefined);
  };

  return (
    <>
      <LoginBtn
        className={className}
        disableRipple
        startIcon={
          currentUser?.avatar ? (
            <Avatar src={currentUser.avatar} />
          ) : (
            <AccountCircle className="icon-login" />
          )
        }
        onClick={currentUser ? handleLogout : handleOpenLogin}
        id="basic-button"
        aria-controls={openDropdown ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openDropdown ? "true" : undefined}
      >
        {currentUser?.fullname ? currentUser.fullname : label}
      </LoginBtn>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openDropdown}
        onClose={handleCloseDropdown}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleCloseDropdown}>Thông tin cá nhân</MenuItem>
        <MenuItem onClick={handleCloseDropdown}>Quản lí hoạt động</MenuItem>
        <MenuItem onClick={logOut}>Đăng xuất</MenuItem>
      </Menu>
      <LoginModal open={open} onClose={handleClose} />
    </>
  );
};

export default LoginButton;

LoginButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};
LoginButton.defaultProps = {
  label: "button",
  className: "",
};
