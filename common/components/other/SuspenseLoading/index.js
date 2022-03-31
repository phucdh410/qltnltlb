import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import Image from "next/image";

export default function SuspenseLoading() {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/assets/images/global/suspenseloading.webp"
            height="200"
            width="300"
            alt="Loading Image"
          />
          <CircularProgress
            sx={{
              height: "100px!important",
              width: "100px!important",
              color: "#ef41a1",
            }}
          />
        </div>
      </Backdrop>
    </div>
  );
}
