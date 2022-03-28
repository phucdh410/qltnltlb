import React, { useCallback, useEffect, useState } from "react";
import { LoginButton } from "common/components/control";
import { Tabs, Tab, styled } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { getAll } from "utils/axios";

const TabsNav = styled(Tabs)(({ theme }) => ({
  height: "100%",
  borderRadius: "0 0 10px 10px",
  filter: "drop-shadow(-1px 8px 13px rgba(229, 91, 230, 0.5))",
  background: theme.palette.color.white,
  "& .MuiTabs-flexContainer": {
    height: "100%",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "unset",
  },
}));
const HomeTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.color.pink,
  fontWeight: 600,
  borderBottomLeftRadius: "10px",
  height: "100%",
  maxWidth: "60px",
  minHeight: "unset",
  padding: 0,
}));
const TabItem = styled(Tab)(({ theme }) => ({
  color: theme.palette.color.pink,
  background: theme.palette.color.white,
  lineHeight: "21px",
  letterSpacing: "0em",
  fontWeight: 700,
  fontSize: "18px",
  height: "100%",
  minHeight: "unset",
  paddingTop: 0,
  paddingBottom: 0,
  // borderBottomLeftRadius: "10px",
  position: "relative",
  "&.Mui-selected": {
    marginLeft: "-1px",
    backgroundColor: theme.palette.color.pink,
    color: theme.palette.color.white,
  },
  "&:before": {
    content: '""',
    height: "90%",
    width: "1px",
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: theme.palette.color.pink,
  },
}));

const topics = [
  {
    _id: 1,
    name: "Hành trình theo chân Bác",
    slug: "/hanh-trinh-theo-chan-bac",
  },
  {
    _id: 2,
    name: "Văn hóa, nghệ thuật Hồ Chí Minh",
    slug: "/van-hoa-nghe-thuat-ho-chi-minh",
  },
  {
    _id: 3,
    name: "Học tập và làm theo lời Bác",
    slug: "/hoc-tap-va-lam-theo-loi-bac",
  },
  {
    _id: 4,
    name: "Topic thứ 4",
    slug: "/topic-4",
  },
  {
    _id: 5,
    name: "Topic thứ 5",
    slug: "/topic-5",
  },
];

const Navigation = () => {
  const handleRequest = useCallback(() => {
    console.log("Gọi Api");
    const data = getAll("topic");
    console.log(data);
  }, []);

  useEffect(() => {
    handleRequest();
  }, []);

  const router = useRouter();
  const [value, setValue] = useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="row">
      <div className="col-12 px-0">
        <LoginButton className="btn-login" label="đăng nhập" />
        <div
          style={{ paddingRight: "20px", display: "flow-root", height: "100%" }}
        >
          <TabsNav
            value={value}
            onChange={handleChange}
            aria-label="tabs-menu"
            variant="fullWidth"
          >
            <Tab value="/404" label="404" hidden />

            {/* icon Home */}
            <HomeTab
              value={"/"}
              label={
                <Link href="/" passHref>
                  <svg
                    width="43"
                    height="42"
                    viewBox="0 0 43 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_450_2418)">
                      <path
                        d="M41.5605 19.1192L35.1952 12.7539V5.40094C35.1952 4.07142 34.1178 2.99394 32.7863 2.99394C31.4579 2.99394 30.3805 4.07142 30.3805 5.40094V7.93935L25.6411 3.1997C23.2978 0.857733 19.2237 0.861888 16.8858 3.20394L0.970154 19.1192C0.0306191 20.0606 0.0306191 21.5839 0.970154 22.5239C1.91011 23.465 3.43633 23.465 4.37595 22.5239L20.2901 6.60813C20.8085 6.09241 21.7223 6.09241 22.238 6.6066L38.1548 22.5239C38.6268 22.9945 39.2421 23.2285 39.8573 23.2285C40.4737 23.2285 41.0901 22.9942 41.5606 22.5239C42.5005 21.584 42.5005 20.0607 41.5605 19.1192Z"
                        fill="#FF008E"
                      />
                      <path
                        d="M22.1016 11.1772C21.6392 10.715 20.8905 10.715 20.4294 11.1772L6.43001 25.1725C6.20898 25.3934 6.08368 25.695 6.08368 26.0098V36.2175C6.08368 38.6128 8.02583 40.5548 10.421 40.5548H17.3522V29.8208H25.1773V40.5548H32.1085C34.5037 40.5548 36.4458 38.6128 36.4458 36.2175V26.0098C36.4458 25.695 36.3216 25.3934 36.0995 25.1725L22.1016 11.1772Z"
                        fill="#FF008E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_450_2418">
                        <rect
                          width="42"
                          height="42"
                          fill="white"
                          transform="translate(0.265442)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              }
              className="tab-item"
            />

            <TabItem
              sx={{ pointerEvents: "none" }}
              value={"/gioi-thieu"}
              label={
                <Link href="#" passHref>
                  Giới thiệu
                </Link>
              }
              className="tab-item"
            />
            {/* {topics &&
              topics.length > 0 &&
              topics.slice(0, 3).map((topic) => (
                <TabItem
                  key={topic._id}
                  value={topic.slug}
                  label={
                    <Link href={`/topic/${topic.slug}`} passHref>
                      {topic.name}
                    </Link>
                  }
                  className="tab-item"
                />
              ))} */}
            {topics &&
              topics.length > 0 &&
              topics.slice(0, 3).map((topic) => (
                <TabItem
                  key={topic._id}
                  value={topic.slug}
                  label={
                    <Link href={`${topic.slug}`} passHref>
                      {topic.name}
                    </Link>
                  }
                  className="tab-item"
                />
              ))}
          </TabsNav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
