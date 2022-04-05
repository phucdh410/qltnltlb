import React from "react";
import { Button, styled } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

const NewButton = styled(Button)(({ theme }) => ({
  background: theme.palette.color.pink,
  color: theme.palette.color.white,
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  letterSpacing: "0em",
  borderRadius: "unset",
  "&:hover": {
    background: theme.palette.color.pink,
  },
}));

const ReadMoreButton = ({ url }) => {
  const router = useRouter();

  return (
    <Link href={`/blogs/${url}`} passHref>
      <NewButton className="read-more-btn" variant="contained">
        xem thêm
      </NewButton>
    </Link>
  );
};

export default ReadMoreButton;

ReadMoreButton.propTypes = {
  url: PropTypes.string,
};
ReadMoreButton.defaultProps = {
  url: "/404",
};
