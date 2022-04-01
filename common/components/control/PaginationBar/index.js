import React, { useState } from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem, styled } from "@mui/material";

const NewPagination = styled(Pagination)(({ theme }) => ({
  textAlign: "center",
  "& .MuiPagination-ul": {
    display: "inline-flex",
    flexWrap: "nowrap",
    border: "1px solid #A000A2",
    borderRadius: "13px",
    "& .MuiPaginationItem-icon": {
      fontSize: "2.5rem",
    },
    "& .MuiPaginationItem-root": {
      color: theme.palette.color.darkPurple,
      fontWeight: 400,
      display: "flex",
      justifyContent: "center",
      margin: 0,
      borderRadius: "unset",
      "&.Mui-selected": {
        backgroundColor: theme.palette.color.purple,
        color: theme.palette.color.white,
        fontWeight: 700,
      },

      //Đây là dấu 3 chấm
      "&.MuiPaginationItem-ellipsis": {
        alignItems: "center",
      },
    },
    "li:first-of-type": {
      borderRight: "inherit",
    },
    "li:last-of-type": {
      borderLeft: "inherit",
    },
  },
}));

const PaginationBar = ({ pages }) => {
  const [page, setPage] = useState(1);

  const onChange = (event, newValue) => {
    setPage(newValue);
  };
  return (
    <NewPagination
      className="pagination-bar-wrap"
      size="large"
      count={pages}
      shape="rounded"
      boundaryCount={1}
      siblingCount={1}
      // data-aos="zoom-in"
      page={page}
      onChange={onChange}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  );
};

export default PaginationBar;
PaginationBar.propTypes = {
  pages: PropTypes.number,
};
Pagination.defaultProps = {
  pages: 1,
};
