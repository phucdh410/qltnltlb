import { Typography } from "@mui/material";
import React from "react";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const BannerTitle = ({ title }) => {
  return (
    <div style={styles}>
      <Typography className="tag-label">{title}</Typography>
    </div>
  );
};

export default BannerTitle;
