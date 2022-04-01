import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { AccountCircle } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import Link from "next/link";
import { LoginModal } from "common/components/other";
import { shallowEqual, useSelector } from "react-redux";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useSelector(
    (state) => ({
      user: state.auth.user,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (user) {
      console.log("Người dùng đã đăng nhập");
    } else {
      console.log("người dùng chưa đăng nhập");
    }
  }, [user]);

  return (
    <>
      <LoginBtn
        className={className}
        disableRipple
        startIcon={<AccountCircle className="icon-login" />}
        onClick={handleOpen}
      >
        {label}
      </LoginBtn>
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
