import React from "react";
import { Modal } from "@mui/material";

const LoginModal = ({ open, onClose }) => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("Login");
  };
  return (
    <Modal open={open} onClose={onClose}>
      <form className="login">
        <input type="text" placeholder="Tên đăng nhập" />
        <input type="password" placeholder="Mật khẩu" />

        <button onClick={onClick}>Đăng nhập</button>
      </form>
    </Modal>
  );
};

export default LoginModal;
