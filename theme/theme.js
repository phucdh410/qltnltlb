import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&.MuiMenu-list": {
            maxHeight: "300px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Arial",
  },
  palette: {
    color: {
      bg: "#FEF0FF",
      pink: "#ff008e",
      lightPurple: "#D249CB",
      darkPurple: "#A000A2",
      green: "#00893D",

      bgGra: "linear-gradient(180deg, #FEF0FF 0%, #FFB9FD 100%)",
      pinkPurpleGra: "linear-gradient(180deg, #F402D8 0%, #FF008E 100%)",
      greenGra: "linear-gradient(180deg, #0FDB16 0%, #026E02 100%)",

      white: "#ffffff",
      black: "#333333",

      purple: "#b0007d",
      purpleBtn: "#9c00a2",

      kyyeuTitle: "#98009d",
      kyyeuYear: "#A000A2",
      kyyeuDetailBg: "#F8CBDF",
      kyyeuText: "#b553b0",
    },
  },
});
export default theme;
