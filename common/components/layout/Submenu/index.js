import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import Subnav from "./Subnav";

const Submenu = () => {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="submenu">
      <div className="offcanvas-header justify-content-end">
        <IconButton className="offcanvas-btn-close" data-bs-dismiss="offcanvas">
          <Close />
        </IconButton>
      </div>
      <div className="offcanvas-body">
        <Subnav />
      </div>
    </div>
  );
};

export default Submenu;
