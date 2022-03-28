import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material/";
import FireIcon from "../../other/FireIcon/";
import { useRouter } from "next/router";
import Link from "next/link";
import SubLoginButton from "./SubLoginButton";

const ListBtn = styled(ListItemButton)(({ theme }) => ({
  transition: "0.5s",
  "&.Mui-selected": {
    color: theme.palette.color.white,
    background: theme.palette.color.pink,
    transform: "skewY(-4deg)",
    "&:hover": {
      background: theme.palette.color.pink,
    },
  },
}));
const ListIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "30px",
}));
const ListText = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontSize: "16px",
    fontWeight: "bold",
  },
}));

const urlMenu = [
  "/",
  "/hanh-trinh-theo-chan-bac",
  "/van-hoa-nghe-thuat-ho-chi-minh",
  "/hoc-tap-va-lam-theo-loi-bac",
];
const Subnav = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const FindRoute = useCallback(() => {
    for (let i = 1; i < urlMenu.length; i++) {
      if (router.pathname.includes(urlMenu[i])) {
        return i;
      }
    }
    return 0;
  }, [router.pathname]);

  useEffect(() => {
    setSelectedIndex(FindRoute());
  }, [FindRoute]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <SubLoginButton />
      <List component="nav">
        <Link href="/" passHref={true}>
          <ListBtn
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListIcon>{selectedIndex === 0 && <FireIcon />}</ListIcon>
            <ListText primary="Trang chủ" />
          </ListBtn>
        </Link>

        <Link href="#" passHref={true}>
          <ListBtn
            selected={selectedIndex === 404}
            onClick={(event) => handleListItemClick(event, 101)}
          >
            <ListIcon>{selectedIndex === 404 && <FireIcon />}</ListIcon>
            <ListText primary="Giới thiệu" />
          </ListBtn>
        </Link>

        <Link href="/hanh-trinh-theo-chan-bac" passHref={true}>
          <ListBtn
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListIcon>{selectedIndex === 1 && <FireIcon />}</ListIcon>
            <ListText primary="Hành trình theo chân Bác" />
          </ListBtn>
        </Link>

        <Link href="/van-hoa-nghe-thuat-ho-chi-minh" passHref={true}>
          <ListBtn
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListIcon>{selectedIndex === 2 && <FireIcon />}</ListIcon>
            <ListText primary="Văn hóa, nghệ thuật Hồ Chí Minh" />
          </ListBtn>
        </Link>

        <Link href="/hoc-tap-va-lam-theo-loi-bac" passHref={true}>
          <ListBtn
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListIcon>{selectedIndex === 3 && <FireIcon />}</ListIcon>
            <ListText primary="Học tập và làm theo lời Bác" />
          </ListBtn>
        </Link>
      </List>
    </Box>
  );
};
export default Subnav;
