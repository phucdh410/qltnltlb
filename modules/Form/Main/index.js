import React, { useEffect, useState, useCallback } from "react";
import { Box, styled, Tab, Tabs } from "@mui/material";
import { DangKy, NopMinhChung, KetQua } from "modules/Form/";
import { getAchievementFields } from "store/actions/achievementFieldsAction";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}
const NewTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    borderRight: "4px solid",
    "&:last-child": {
      border: "none",
    },
  },
}));
const NewTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.color.pink,
  maxWidth: "unset",
  minHeight: "unset",
  fontStyle: "normal",
  fontWeight: 700,
  padding: "8px 20px",
  fontSize: "36px",
  lineHeight: "48px",
  "&.Mui-selected": {
    color: theme.palette.color.pink,
    textDecorationLine: "underline",
  },
  ["@media (max-width:1440px)"]: {
    padding: "6px 16px",
    fontSize: "22px",
    lineHeight: "28px",
  },
  ["@media (max-width:768px)"]: {
    padding: "6px 12px",
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

const student = {
  id: "id_1",
  fullname: "Đặng Hoàng Phúc",
  major: "CNNT.C",
  username: "41.01.104.094",
};

const Main = ({ student }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleGetAchievementItem = useCallback(async () => {
    await dispatch(getAchievementFields());
  }, []);

  useEffect(() => {
    handleGetAchievementItem();
  }, [handleGetAchievementItem]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="section-wrap">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-6 mx-auto">
            <NewTabs value={value} onChange={handleChange} centered>
              <NewTab label="Đăng ký" {...a11yProps(0)} />
              <NewTab label="Nộp minh chứng" {...a11yProps(1)} />
              <NewTab label="Kết quả" {...a11yProps(2)} />
            </NewTabs>
            <TabPanel value={value} index={0}>
              <DangKy student={student} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <NopMinhChung student={student} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <KetQua student={student} />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
