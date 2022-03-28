import React, { useState } from "react";
import { LoginModal } from "common/components/other";

const SubLoginButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="sub-login-button">
      <button className="button-62" onClick={handleOpen}>
        Đăng nhập
      </button>
      <LoginModal open={open} onClose={handleClose} />
    </div>
  );
};

export default SubLoginButton;
